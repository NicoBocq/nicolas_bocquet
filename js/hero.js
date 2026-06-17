// Kinetic hero: each letter of the name follows the cursor distance, mapped to
// Inter's variable `wght` axis (100-900) and smoothed in requestAnimationFrame.
document.addEventListener("DOMContentLoaded", () => {
	const lines = document.querySelectorAll(".hero-name .hero-line");
	if (!lines.length) return;

	// Static neutral weights (match the previous firstname/lastname look).
	const NEUTRAL = [300, 900];
	const MAX_W = 900; // closest to cursor
	const MIN_W = 200; // far from cursor
	const RADIUS = 340; // px of influence
	const EASE = 0.2; // lerp factor (trailing smoothness)

	// Build letters from data (constant across languages) into spans.
	const letters = [];
	lines.forEach((line, lineIndex) => {
		const text =
			line.dataset.text ||
			(lineIndex === 0
				? (window.PORTFOLIO_DATA?.profile.firstname || "").toUpperCase()
				: (window.PORTFOLIO_DATA?.profile.lastname || "").toUpperCase());
		line.textContent = "";
		const neutral = NEUTRAL[lineIndex] ?? 400;
		for (const ch of text) {
			const span = document.createElement("span");
			span.className = "kinetic-letter";
			span.setAttribute("aria-hidden", "true");
			span.textContent = ch;
			span.style.setProperty("--w", neutral);
			line.appendChild(span);
			letters.push({ el: span, neutral, current: neutral, target: neutral });
		}
	});

	if (!letters.length) return;

	// Only animate for fine pointers and when motion is allowed.
	const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
	if (!canHover.matches || reduceMotion.matches) return;

	let centers = [];
	const measure = () => {
		centers = letters.map(({ el }) => {
			const r = el.getBoundingClientRect();
			return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
		});
	};
	measure();

	let rafId = null;
	let running = false;

	const tick = () => {
		let settled = true;
		for (const letter of letters) {
			const next = letter.current + (letter.target - letter.current) * EASE;
			letter.current = next;
			letter.el.style.setProperty("--w", Math.round(next));
			if (Math.abs(letter.target - next) > 0.5) settled = false;
		}
		if (settled) {
			running = false;
			rafId = null;
			return;
		}
		rafId = requestAnimationFrame(tick);
	};

	const start = () => {
		if (running) return;
		running = true;
		rafId = requestAnimationFrame(tick);
	};

	const onMove = (e) => {
		for (let i = 0; i < letters.length; i++) {
			const c = centers[i];
			const dx = e.clientX - c.x;
			const dy = e.clientY - c.y;
			const d = Math.sqrt(dx * dx + dy * dy);
			const t = Math.max(0, 1 - d / RADIUS); // 1 near, 0 far
			letters[i].target = MIN_W + (MAX_W - MIN_W) * t;
		}
		start();
	};

	const onLeave = () => {
		for (const letter of letters) letter.target = letter.neutral;
		start();
	};

	window.addEventListener("pointermove", onMove, { passive: true });
	document.documentElement.addEventListener("pointerleave", onLeave);
	window.addEventListener("resize", measure);
	window.addEventListener("scroll", measure, { passive: true });
});
