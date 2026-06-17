document.addEventListener("DOMContentLoaded", () => {
	// --- JSON-LD ---

	function injectJsonLd() {
		const d = DataLoader._data;
		const p = d.profile;

		const skills = [...d.skills.tech, ...d.skills.ai, ...d.skills.soft]
			.flatMap((s) => s.split(" / "))
			.map((s) =>
				s
					.trim()
					.toLowerCase()
					.replace(/\b\w/g, (c) => c.toUpperCase()),
			);

		const currentJob = d.resume.experience[0];
		const education = d.resume.education[0];

		const schema = {
			"@context": "https://schema.org",
			"@type": "Person",
			name: `${p.firstname} ${p.lastname}`,
			givenName: p.firstname,
			familyName: p.lastname,
			jobTitle: p.role,
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
				name: currentJob.company,
			},
			alumniOf: {
				"@type": "EducationalOrganization",
				name: education.school,
			},
			hasOccupation: {
				"@type": "Occupation",
				name: p.role,
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

	// --- Lang ---

	const langToggle = document.getElementById("langToggle");

	function render(lang) {
		DataLoader.init(lang);

		DataLoader.loadProfile(
			{
				useShortRole: false,
			},
			document.getElementById("profile-role"),
		);

		DataLoader.loadBio(document.getElementById("about-container"), "long");
		DataLoader.loadExperienceForMain(
			document.getElementById("main-experience-list"),
		);
		DataLoader.loadOpenSource(document.getElementById("opensource-list"));
		DataLoader.loadSkills(document.getElementById("skills-container"), "main");
		DataLoader.applyI18n();
		injectJsonLd();
	}

	const currentLang = DataLoader.detectLang();
	render(currentLang);

	langToggle.addEventListener("click", () => {
		const next = document.body.getAttribute("data-lang") === "fr" ? "en" : "fr";
		render(next);
	});

	// --- Email copy ---

	const emailLink = document.getElementById("emailLink");
	if (emailLink) {
		emailLink.addEventListener("click", function (e) {
			e.preventDefault();
			const email = `${this.dataset.user}@${this.dataset.domain}`;
			navigator.clipboard
				.writeText(email)
				.then(() => {
					const orig = this.textContent;
					this.textContent = "COPIED!";
					setTimeout(() => {
						this.textContent = orig;
					}, 2000);
				})
				.catch(() => {
					window.location.href = `mailto:${email}`;
				});
		});
	}

	// --- Section index (active tracking) ---

	const indexLinks = Array.from(
		document.querySelectorAll(".section-index a"),
	);
	const sections = document.querySelectorAll("main .section");

	if (indexLinks.length && sections.length && "IntersectionObserver" in window) {
		const linkFor = (id) =>
			indexLinks.find((a) => a.getAttribute("href") === `#${id}`);

		const setActive = (id) => {
			indexLinks.forEach((a) => {
				const isActive = a.getAttribute("href") === `#${id}`;
				a.classList.toggle("is-active", isActive);
				if (isActive) a.setAttribute("aria-current", "true");
				else a.removeAttribute("aria-current");
			});
		};

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
				if (visible) setActive(visible.target.id);
			},
			{ rootMargin: "-40% 0px -55% 0px", threshold: 0 },
		);

		sections.forEach((s) => observer.observe(s));
	}

	// --- Theme ---

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
			document.body.getAttribute("data-theme") === "light" ? "dark" : "light",
		);
	});

	prefersDark.addEventListener("change", (e) =>
		setTheme(e.matches ? "dark" : "light"),
	);
});
