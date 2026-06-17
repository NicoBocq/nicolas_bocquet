// biome-ignore lint/correctness/noUnusedVariables: <no need to export the module>
const DataLoader = {
	_data: null,

	// --- Lang resolution ---

	detectLang() {
		const urlParam = new URLSearchParams(window.location.search).get("lang");
		if (urlParam === "fr" || urlParam === "en") return urlParam;
		const stored = localStorage.getItem("lang");
		if (stored === "fr" || stored === "en") return stored;
		if (navigator.language?.toLowerCase().startsWith("fr")) return "fr";
		return "en";
	},

	_resolve(data, lang) {
		if (Array.isArray(data)) return data.map((i) => this._resolve(i, lang));
		if (data && typeof data === "object") {
			if ("en" in data || "fr" in data) return data[lang] ?? data.en;
			return Object.fromEntries(
				Object.entries(data).map(([k, v]) => [k, this._resolve(v, lang)]),
			);
		}
		return data;
	},

	init(lang) {
		this._data = this._resolve(PORTFOLIO_DATA, lang);
		document.documentElement.lang = lang;
		document.body.setAttribute("data-lang", lang);
		localStorage.setItem("lang", lang);
		const url = new URL(window.location);
		url.searchParams.set("lang", lang);
		history.replaceState(null, "", url);
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
			roleElement.textContent = profileElement.useShortRole
				? p.shortRole
				: p.role;
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

	loadBio(container, format = "short") {
		if (!container) return;
		container.innerHTML = "";
		const bio = this._data.bio;
		const profile = this._data.profile;

		if (format === "short") {
			container.innerHTML = `<p>${bio.short}</p>`;
		} else {
			const wrapper = document.createElement("div");
			wrapper.className = "about-wrapper";
			const text = document.createElement("div");
			text.className = "about-text";
			const bioContent = Array.isArray(bio.long)
				? bio.long.map((p) => `<p>${p}</p>`).join("")
				: `<p>${bio.long}</p>`;
			text.innerHTML = `${bioContent}
                <p class="font-mono status-block">
                    > LOCATION: ${profile.location.toUpperCase()}<br>
                    > STATUS: ${profile.status.toUpperCase()}
                </p>`;
			wrapper.appendChild(text);
			container.appendChild(wrapper);
		}
	},

	loadExperience(container) {
		if (!container) return;
		container.innerHTML = "";
		this._data.resume.experience.forEach((job) => {
			const item = document.createElement("div");
			item.className = "experience-item";
			let detailsHtml = "";
			if (job.description) detailsHtml += `<p><em>${job.description}</em></p>`;
			if (job.details?.length)
				detailsHtml += `<ul>${job.details.map((d) => `<li>${d}</li>`).join("")}</ul>`;
			item.innerHTML = `
                <h3>${job.role}</h3>
                <span class="meta">${job.company} | ${job.period} | ${job.location}</span>
                ${detailsHtml}
            `;
			container.appendChild(item);
		});
	},

	loadExperienceForMain(container) {
		if (!container) return;
		container.innerHTML = "";
		this._data.resume.experience.forEach((job) => {
			const li = document.createElement("li");
			li.className = "project-item spotlight-item";
			li.innerHTML = `
                <div class="project-meta font-mono">
                    <span class="company-name">${job.company}</span>
                    <span class="meta-period">${job.period}</span>
                </div>
                <div class="project-body">
                    <h4>${job.role}</h4>
                    ${job.description ? `<p class="project-description">${job.description}</p>` : ""}
                    ${
											job.details?.length
												? `
                        <ul class="details-list">
                            ${job.details.map((d) => `<li class="details-item">${d}</li>`).join("")}
                        </ul>
                    `
												: ""
										}
                </div>
            `;
			container.appendChild(li);
		});
	},

	loadSkills(container, format = "resume") {
		if (!container) return;
		container.innerHTML = "";
		const skills = this._data.skills;
		const labels = this._data.ui.skillLabels;

		const categories = [
			{ key: "soft", label: labels.soft },
			{ key: "ai", label: labels.ai },
			{ key: "tech", label: labels.tech },
		];

		if (format === "resume") {
			categories.forEach((cat) => {
				if (!skills[cat.key]) return;
				const div = document.createElement("div");
				div.className = "skill-category";
				const label = document.createElement("strong");
				label.className = "skill-label";
				label.textContent = cat.label;
				div.appendChild(label);
				const content = document.createElement("div");
				content.className = "skill-content";
				content.textContent = skills[cat.key].join(" · ");
				div.appendChild(content);
				container.appendChild(div);
			});
		} else {
			// Main page: lean, readable stack — tech + AI only, as flowing lists.
			// Soft skills and languages stay in the data (used by JSON-LD) but are
			// not surfaced here to keep the section legible and meaningful.
			const mainCategories = [
				{ key: "tech", label: labels.tech },
				{ key: "ai", label: labels.ai },
			];
			mainCategories.forEach((cat) => {
				if (!skills[cat.key]?.length) return;
				const row = document.createElement("div");
				row.className = "skill-row";
				const label = document.createElement("span");
				label.className = "skill-cat font-mono";
				label.textContent = cat.label.toUpperCase();
				const items = document.createElement("p");
				items.className = "skill-items";
				items.textContent = skills[cat.key].join(" · ");
				row.appendChild(label);
				row.appendChild(items);
				container.appendChild(row);
			});
		}
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

	loadOpenSource(container) {
		if (!container) return;
		container.innerHTML = "";
		this._data.opensource.forEach((project) => {
			const li = document.createElement("li");
			li.className = "project-item spotlight-item";
			const stack = (project.stack || []).join(" · ");
			let host = project.link;
			try {
				host = new URL(project.link).host.replace(/^www\./, "");
			} catch {}
			li.innerHTML = `
                <a href="${project.link}" target="_blank" rel="noopener noreferrer">
                    <div class="project-meta font-mono">
                        <span>${project.year}</span>
                    </div>
                    <h4>${project.title}</h4>
                    <p class="project-description">${project.description}</p>
                    ${stack ? `<p class="project-stack font-mono">${stack}</p>` : ""}
                    <span class="project-link font-mono">${host} ↗</span>
                </a>
            `;
			container.appendChild(li);
		});
	},

	loadLanguages(container) {
		if (!container) return;
		container.innerHTML = "";
		this._data.skills.languages.forEach((lang) => {
			const div = document.createElement("div");
			div.className = "experience-item";
			div.innerHTML = `<h3>${lang.name}</h3><span class="meta">${lang.level}</span>`;
			container.appendChild(div);
		});
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
