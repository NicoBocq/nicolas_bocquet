document.addEventListener("DOMContentLoaded", () => {
	let rail = null;
	let observer = null;

	function injectJsonLd() {
		const d = DataLoader._data;
		const p = d.profile;

		const skills = [...d.skills.tech, ...d.skills.ai, ...d.skills.product]
			.flatMap((s) => s.split(" / "))
			.map((s) =>
				s
					.trim()
					.toLowerCase()
					.replace(/\b\w/g, (c) => c.toUpperCase()),
			);

		const schema = {
			"@context": "https://schema.org",
			"@type": "Person",
			name: `${p.firstname} ${p.lastname}`,
			givenName: p.firstname,
			familyName: p.lastname,
			jobTitle: p.shortRole,
			description: d.bio.short,
			url: `https://${p.domain}`,
			email: p.email,
			address: {
				"@type": "PostalAddress",
				addressLocality: "Marseille",
				addressCountry: "FR",
			},
			sameAs: [
				"https://github.com/NicoBocq",
				"https://www.linkedin.com/in/bocquetnicolas",
			],
			knowsAbout: skills,
			worksFor: {
				"@type": "Organization",
				name: d.resume.experience[0].company,
			},
			alumniOf: {
				"@type": "EducationalOrganization",
				name: d.resume.education[0].school,
			},
			hasOccupation: {
				"@type": "Occupation",
				name: p.shortRole,
				occupationLocation: {
					"@type": "City",
					name: "Marseille",
				},
				skills: d.skills.tech.join(", "),
			},
		};

		let el = document.getElementById("json-ld-person");
		if (!el) {
			el = document.createElement("script");
			el.type = "application/ld+json";
			el.id = "json-ld-person";
			document.head.appendChild(el);
		}
		el.textContent = JSON.stringify(schema);
	}

	function centerActive(link) {
		const overflow = rail.scrollWidth - rail.clientWidth;
		if (overflow <= 0) return;
		const target = link.offsetLeft - (rail.clientWidth - link.offsetWidth) / 2;
		rail.scrollTo({
			left: Math.max(0, Math.min(target, overflow)),
			behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
				? "auto"
				: "smooth",
		});
	}

	function trackRail() {
		if (!("IntersectionObserver" in window)) return;
		observer?.disconnect();

		const links = Array.from(rail.querySelectorAll('a[href^="#"]'));
		const entries = Array.from(document.querySelectorAll(".entry"));
		const visible = new Set();

		const setActive = (id) => {
			for (const link of links) {
				const isActive = link.getAttribute("href") === `#${id}`;
				link.classList.toggle("is-active", isActive);
				if (isActive) {
					link.setAttribute("aria-current", "true");
					centerActive(link);
				} else link.removeAttribute("aria-current");
			}
		};

		observer = new IntersectionObserver(
			(changes) => {
				for (const change of changes) {
					if (change.isIntersecting) visible.add(change.target.id);
					else visible.delete(change.target.id);
				}
				const current = entries.find((entry) => visible.has(entry.id));
				setActive(current ? current.id : null);
			},
			{ rootMargin: "-40% 0px -55% 0px", threshold: 0 },
		);

		for (const entry of entries) observer.observe(entry);
	}

	Shell.start(() => {
		rail = document.getElementById("siteNav");
		DataLoader.loadIntro(
			document.getElementById("profile-role"),
			document.getElementById("profile-tagline"),
			document.getElementById("profile-premise"),
		);
		DataLoader.loadJournal(document.getElementById("journal"));
		DataLoader.loadColophon(document.getElementById("colophon"));
		injectJsonLd();
		trackRail();
	});
});
