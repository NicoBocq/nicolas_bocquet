// biome-ignore lint/correctness/noUnusedVariables: <no need to export the module>
const Shell = {
	mark: `<svg viewBox="0 0 100 100" aria-hidden="true">
		<rect width="100" height="100" rx="22" fill="var(--color-text)"/>
		<line x1="50" y1="53" x2="61.8" y2="36.8" stroke="var(--color-bg)" stroke-width="10" stroke-linecap="round"/>
		<line x1="50" y1="53" x2="78.5" y2="43.7" stroke="var(--color-bg)" stroke-width="10" stroke-linecap="round"/>
		<circle cx="50" cy="53" r="6" fill="var(--color-bg)"/>
	</svg>`,

	mount() {
		document.getElementById("topbar").innerHTML = `
			<a class="logo-mark font-mono" href="index.html" aria-label="1h12, Nicolas Bocquet">${this.mark}1h12</a>
			<nav class="site-nav" id="siteNav" aria-label="Projects"></nav>
			<div class="header-controls">
				<button class="lang-toggle" id="langToggle" aria-label="Toggle language" type="button"></button>
				<button class="theme-toggle" id="themeToggle" aria-label="Toggle theme" aria-pressed="false" type="button"></button>
			</div>
		`;
		document.getElementById("contact").innerHTML = `
			<ul class="contact-list font-mono">
				<li><a href="#" id="emailLink" data-user="nicolas" data-domain="1h12.com" aria-label="Copy Email Address">EMAIL</a></li>
				<li><a href="https://github.com/NicoBocq" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile (opens in new tab)">GITHUB</a></li>
				<li><a href="https://www.linkedin.com/in/bocquetnicolas" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile (opens in new tab)">LINKEDIN</a></li>
				<li class="separator footer-separator">|</li>
				<li><a href="resume.html" aria-label="View Resume" class="resume-link" data-i18n="nav.resume">RESUME</a></li>
			</ul>
			<div class="footer-side">
				<p class="footer-origin" id="origin"></p>
				<span class="footer-brand font-mono">${this.mark}© 2026 — 1h12.com</span>
			</div>
		`;
	},

	start(render) {
		this.mount();

		const apply = (lang) => {
			DataLoader.init(lang);
			DataLoader.loadNav(
				document.getElementById("siteNav"),
				document.body.dataset.project,
			);
			render();
			DataLoader.loadOrigin(document.getElementById("origin"));
			DataLoader.applyI18n();
		};

		apply(DataLoader.detectLang());

		document.getElementById("langToggle").addEventListener("click", () => {
			apply(document.body.getAttribute("data-lang") === "fr" ? "en" : "fr");
		});

		this.bindEmail();
		this.bindTheme();
		this.measureTopbar();
		window.addEventListener("resize", () => this.measureTopbar(), {
			passive: true,
		});
	},

	bindEmail() {
		const emailLink = document.getElementById("emailLink");
		emailLink.addEventListener("click", (event) => {
			event.preventDefault();
			const email = `${emailLink.dataset.user}@${emailLink.dataset.domain}`;
			navigator.clipboard
				.writeText(email)
				.then(() => {
					const label = emailLink.textContent;
					emailLink.textContent = "COPIED!";
					setTimeout(() => {
						emailLink.textContent = label;
					}, 2000);
				})
				.catch(() => {
					window.location.href = `mailto:${email}`;
				});
		});
	},

	bindTheme() {
		const themeToggle = document.getElementById("themeToggle");
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

		const setTheme = (theme) => {
			document.body.setAttribute("data-theme", theme);
			themeToggle.setAttribute(
				"aria-pressed",
				theme === "dark" ? "true" : "false",
			);
			localStorage.setItem("theme", theme);
		};

		const storedTheme = localStorage.getItem("theme");
		if (storedTheme === "dark" || storedTheme === "light") {
			setTheme(storedTheme);
		} else if (prefersDark.matches) {
			setTheme("dark");
		}

		themeToggle.addEventListener("click", () => {
			setTheme(
				document.body.getAttribute("data-theme") === "dark" ? "light" : "dark",
			);
		});

		prefersDark.addEventListener("change", (event) =>
			setTheme(event.matches ? "dark" : "light"),
		);
	},

	measureTopbar() {
		const height = document.getElementById("topbar").offsetHeight;
		document.documentElement.style.setProperty("--topbar-h", `${height}px`);
	},
};
