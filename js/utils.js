// biome-ignore lint/correctness/noUnusedVariables: <no need to export the module>
const DataLoader = {
	_data: null,
	_lang: "en",

	// --- Lang resolution ---

	detectLang() {
		const urlParam = new URLSearchParams(window.location.search).get("lang");
		if (urlParam === "fr" || urlParam === "en") return urlParam;
		const stored = localStorage.getItem("lang");
		if (stored === "fr" || stored === "en") return stored;
		if (navigator.language?.toLowerCase().startsWith("fr")) return "fr";
		return "en";
	},

	_frenchSpacing(value) {
		if (Array.isArray(value)) return value.map((v) => this._frenchSpacing(v));
		if (typeof value !== "string") return value;
		return value.replace(/ ([?!:;»])/g, " $1").replace(/« /g, "« ");
	},

	_resolve(data, lang) {
		if (Array.isArray(data)) return data.map((i) => this._resolve(i, lang));
		if (data && typeof data === "object") {
			if ("en" in data || "fr" in data) {
				const value = data[lang] ?? data.en;
				return lang === "fr" ? this._frenchSpacing(value) : value;
			}
			return Object.fromEntries(
				Object.entries(data).map(([k, v]) => [k, this._resolve(v, lang)]),
			);
		}
		return data;
	},

	init(lang) {
		this._lang = lang;
		this._data = this._resolve(PORTFOLIO_DATA, lang);
		document.documentElement.lang = lang;
		document.body.setAttribute("data-lang", lang);
		localStorage.setItem("lang", lang);
		const url = new URL(window.location);
		url.searchParams.set("lang", lang);
		history.replaceState(null, "", url);
	},

	_dayNumber(launched) {
		const today = new Intl.DateTimeFormat("en-CA", {
			timeZone: "Europe/Paris",
		}).format(new Date());
		return (
			Math.round((Date.parse(today) - Date.parse(launched)) / 86_400_000) + 1
		);
	},

	_formatDate(date) {
		return new Intl.DateTimeFormat(this._lang, {
			month: "short",
			year: "numeric",
		}).format(new Date(`${date}-01T12:00:00`));
	},

	_featured() {
		return this._data.projects.filter((project) => project.featured);
	},

	_meta(project) {
		const labels = this._data.ui.work;
		const counter = project.launched
			? `<span>${labels.quiz} ${this._dayNumber(project.launched)}</span>`
			: "";
		return `<span class="entry-date">${this._formatDate(project.date)}</span><span>${labels[project.status]}</span>${counter}`;
	},

	_shots(project, href, { external = false, eager = false } = {}) {
		const [width, height] =
			project.format === "phone" ? [780, 1688] : [1600, 1000];
		const loading = eager ? "eager" : "lazy";
		const images = project.shots
			.map(
				(shot) =>
					`<img src="${shot.src}" alt="${shot.alt}" width="${width}" height="${height}" loading="${loading}" decoding="async">`,
			)
			.join("");
		const classes = `shots shots-${project.format}`;
		if (!href) return `<div class="${classes}">${images}</div>`;
		const target = external ? ' target="_blank" rel="noopener noreferrer"' : "";
		return `<a class="${classes}" href="${href}"${target}>${images}</a>`;
	},

	_liveLink(project) {
		return project.link
			? `<a class="text-link" href="${project.link}" target="_blank" rel="noopener noreferrer">${new URL(project.link).host}</a>`
			: `<span class="entry-host">${project.host}</span>`;
	},

	// --- Loaders ---

	loadProfile(profileElement, roleElement, emailElement, websiteElement) {
		const p = this._data.profile;

		if (profileElement.firstname)
			profileElement.firstname.textContent = p.firstname;
		if (profileElement.lastname)
			profileElement.lastname.textContent = p.lastname;
		if (profileElement.name)
			profileElement.name.textContent = `${p.firstname} ${p.lastname}`;

		if (roleElement) {
			roleElement.textContent = `${p.shortRole} · ${p.location}`;
		}

		if (profileElement.status) profileElement.status.textContent = p.status;

		if (emailElement) {
			emailElement.textContent = p.email;
			emailElement.href = `mailto:${p.email}`;
			emailElement.dataset.user = p.email.split("@")[0];
			emailElement.dataset.domain = p.email.split("@")[1];
		}

		if (websiteElement && p.domain) {
			websiteElement.textContent = p.domain;
			websiteElement.href = `https://${p.domain}`;
		}

		return p;
	},

	loadIntro(roleElement, taglineElement, premiseElement) {
		const p = this._data.profile;
		if (roleElement) roleElement.textContent = `${p.shortRole} · ${p.location}`;
		if (taglineElement) {
			taglineElement.innerHTML = `<strong>${p.tagline.lead}</strong> ${p.tagline.rest}`;
		}
		if (premiseElement) premiseElement.textContent = p.premise;
	},

	loadNav(container, current) {
		if (!container) return;
		const links = this._featured()
			.map((project) => {
				if (project.slug === current) {
					return `<a href="${project.slug}.html" class="is-active" aria-current="page">${project.title}</a>`;
				}
				const href = current ? `${project.slug}.html` : `#${project.slug}`;
				return `<a href="${href}">${project.title}</a>`;
			})
			.join("");
		container.innerHTML = `${links}<a href="resume.html" class="nav-resume">${this._data.ui.nav.resume}</a>`;
	},

	loadJournal(container) {
		if (!container) return;
		const labels = this._data.ui.work;
		container.innerHTML = this._featured()
			.map((project, index) => {
				const page = `${project.slug}.html`;
				return `
					<li class="entry" id="${project.slug}">
						<div class="entry-meta font-mono">${this._meta(project)}</div>
						<h2 class="entry-title"><a href="${page}">${project.title}</a></h2>
						<div class="entry-main">
							${this._shots(project, page, { eager: index === 0 })}
							<div class="entry-side">
								<p class="entry-pitch">${project.pitch}</p>
								<div class="bench">
									<span class="label font-mono">${labels.bench}</span>
									<p class="bench-question">${project.question}</p>
									<span class="bench-models font-mono">${project.models}</span>
								</div>
								<div class="entry-links font-mono">
									<a class="text-link" href="${page}">${labels.read}</a>
									${this._liveLink(project)}
								</div>
							</div>
						</div>
					</li>
				`;
			})
			.join("");
	},

	loadColophon(container) {
		if (!container) return;
		const { career, ui } = this._data;
		container.innerHTML = `
			<div>
				<h2 class="label font-mono">${ui.sections.career}</h2>
				<p>${career.text}</p>
			</div>
			<a class="text-link font-mono" href="resume.html">${ui.nav.fullResume}</a>
		`;
	},

	loadProject(container, slug) {
		if (!container) return;
		const projects = this._featured();
		const index = projects.findIndex((project) => project.slug === slug);
		if (index === -1) return;
		const project = projects[index];
		const next = projects[(index + 1) % projects.length];
		const labels = this._data.ui.work;
		container.innerHTML = `
			<a class="text-link font-mono project-back" href="index.html">${labels.all}</a>
			<div class="entry-meta font-mono">${this._meta(project)}</div>
			<h1 class="project-title">${project.title}</h1>
			<div class="project-body">
				<div class="project-lead">
					<p class="project-pitch">${project.pitch}</p>
					${this._shots(project, project.link, { external: true, eager: true })}
				</div>
				<div class="story">
					<section>
						<h2 class="label font-mono">${labels.idea}</h2>
						<p>${project.story.idea}</p>
					</section>
					<section>
						<h2 class="label font-mono">${labels.iterations}</h2>
						<p>${project.story.iterations}</p>
					</section>
					<section>
						<h2 class="label font-mono">${labels.bench}</h2>
						<p class="bench-question">${project.question}</p>
						<p>${project.story.bench}</p>
						<span class="bench-models font-mono">${project.models}</span>
					</section>
					<div class="entry-links font-mono">${this._liveLink(project)}</div>
				</div>
			</div>
			<a class="project-next" href="${next.slug}.html">
				<span class="label font-mono">${labels.next}</span>
				<span class="project-next-title">${next.title}</span>
			</a>
		`;
	},

	loadOrigin(element) {
		if (element) element.textContent = this._data.career.origin;
	},

	loadBio(container) {
		if (!container) return;
		container.innerHTML = `<p>${this._data.bio.short}</p>`;
	},

	loadMethod(container) {
		if (!container) return;
		container.innerHTML = this._data.method
			.map((rule) => `<li>${rule}</li>`)
			.join("");
	},

	loadExperience(container) {
		if (!container) return;
		container.innerHTML = this._data.resume.experience
			.map((job) => {
				const summary = job.summary ? `<p>${job.summary}</p>` : "";
				const details = job.details?.length
					? `<ul>${job.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>`
					: "";
				return `
					<div class="experience-item">
						<h3>${job.role}</h3>
						<span class="meta">${job.company} | ${job.period} | ${job.location}</span>
						${summary}${details}
					</div>
				`;
			})
			.join("");
	},

	loadSkills(container) {
		if (!container) return;
		const { skills, ui } = this._data;
		const languages = skills.languages.map((language) =>
			`${language.name} (${language.level})`.toUpperCase(),
		);
		const rows = [
			...["product", "ai", "tech"].map((key) => [
				ui.skillLabels[key],
				skills[key],
			]),
			[ui.resume.languages, languages],
		];
		container.innerHTML = rows
			.map(
				([label, items]) => `
					<div class="skill-category">
						<strong class="skill-label">${label}</strong>
						<div class="skill-content">${items.join(" · ")}</div>
					</div>
				`,
			)
			.join("");
	},

	loadTeaching(container) {
		if (!container) return;
		container.innerHTML = "";
		this._data.resume.teaching.forEach((job) => {
			const div = document.createElement("div");
			div.className = "experience-item";
			div.innerHTML = `<h3>${job.role}</h3><span class="meta">${job.school} | ${job.period}</span>`;
			container.appendChild(div);
		});
	},

	loadEducation(container) {
		if (!container) return;
		container.innerHTML = "";
		this._data.resume.education.forEach((edu) => {
			const div = document.createElement("div");
			div.className = "experience-item";
			div.innerHTML = `<h3>${edu.degree}</h3><span class="meta">${edu.school} | ${edu.period}</span>`;
			container.appendChild(div);
		});
	},

	loadProjects(container) {
		if (!container) return;
		const { resume, work } = this._data.ui;
		const items = this._featured()
			.map((project) => {
				const title = project.link
					? `<a href="${project.link}" target="_blank" rel="noopener noreferrer">${project.title}</a>`
					: project.title;
				const host = project.link
					? new URL(project.link).host
					: `${project.host} (${work[project.status].toLowerCase()})`;
				return `
					<div class="experience-item">
						<h3>${title}</h3>
						<span class="meta">${project.year} | ${host}</span>
						<p>${project.pitch}</p>
						<span class="meta">${project.stack.join(" · ")}</span>
					</div>
				`;
			})
			.join("");
		container.innerHTML = `
			<p class="section-intro">${resume.projectsIntro}</p>
			<div class="project-grid">${items}</div>
		`;
	},

	// Met à jour les éléments data-i18n dans le DOM
	applyI18n(scope) {
		const ui = this._data.ui;
		(scope || document).querySelectorAll("[data-i18n]").forEach((el) => {
			const [ns, key] = el.dataset.i18n.split(".");
			const val = ui[ns]?.[key];
			if (val) el.textContent = val;
		});
	},
};
