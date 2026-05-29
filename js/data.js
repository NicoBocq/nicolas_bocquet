/** biome-ignore-all lint/correctness/noUnusedVariables: <no need to export the module> */

const PORTFOLIO_DATA = {
	profile: {
		firstname: "Nicolas",
		lastname: "Bocquet",
		email: "nicolas.fow@gmail.com",
		location: "Marseille, FR",
		domain: "1h12.com",
		role: "Product Engineer · TypeScript / React / Node",
		shortRole: "Product Engineer",
		status: {
			en: "Open to opportunities · CDI · Remote or Marseille area",
			fr: "À l'écoute des opportunités · CDI · Remote ou région marseillaise",
		},
	},

	bio: {
		short: {
			en: "Web developer since 1999. 12 years in journalism and project management. Back to development in 2019, building products end to end.",
			fr: "Développeur web depuis 1999. 12 ans de journalisme et de gestion de projet. Retour aux sources en 2019, pour construire des produits de bout en bout.",
		},
		long: {
			en: [
				"Started as a web developer in 1999, with a focus on UI integration and design. Then came 12 years at La Provence (regional daily newspaper): project manager, then journalist. Returned to development in 2019.",
				"That path changed how I build. I think in products before I think in features. I read data before I write code. And I take UX seriously. I've seen what happens when you don't.",
				"Today I build TypeScript applications at INFORCA (CRM, PIM, SaaS) with the same question driving every decision: does this actually work for the person using it?",
			],
			fr: [
				"Développeur web dès 1999, orienté intégration et design. Puis 12 ans à La Provence (quotidien régional) : chef de projet numérique, puis journaliste. Retour aux sources en 2019.",
				"Ce parcours a changé ma façon de construire. Je pense produit avant de penser feature. Je lis la donnée avant d'écrire le code. Et je prends l'UX au sérieux. J'ai vu ce que ça coûte de la négliger.",
				"Aujourd'hui je construis des applications TypeScript chez INFORCA (CRM, PIM, SaaS) avec la même question qui guide chaque décision : est-ce que ça fonctionne vraiment pour la personne qui l'utilise ?",
			],
		},
	},

	skills: {
		tech: [
			"JAVASCRIPT / TYPESCRIPT",
			"REACT / NEXT.JS",
			"REACT NATIVE",
			"NODE.JS / NESTJS",
			"POSTGRESQL",
			"DRIZZLE, PRISMA",
			"VUE.JS",
			"TAILWIND CSS",
			"REDUX / ZUSTAND",
			"WEBGL / THREE.JS",
			"TESTING (VITEST / PLAYWRIGHT)",
			"GIT / CI/CD / MONOREPO",
			"DOCKER / COOLIFY",
			"FIGMA / UI DESIGN",
		],
		ai: ["CLAUDE CODE", "CODEX", "AGENTIC WORKFLOWS"],
		languages: [
			{ name: "Français", level: { en: "Native", fr: "Langue maternelle" } },
			{ name: "English", level: { en: "Professional", fr: "Professionnel" } },
		],
		soft: {
			en: [
				"PRODUCT BEFORE FEATURES",
				"UX-OBSESSIVE",
				"OBSESSIVE ABOUT THE LAST 10%",
				"END-TO-END OWNERSHIP",
				"TEAM GROWTH & MENTORING",
				"ASYNC-FIRST, REMOTE-READY",
				"COMPLEXITY UNTANGLER",
			],
			fr: [
				"PRODUIT AVANT FEATURE",
				"UX-OBSESSIVE",
				"OBSESSIONNEL DES DERNIERS 10%",
				"OWNERSHIP DE BOUT EN BOUT",
				"CROISSANCE D'ÉQUIPE & MENTORAT",
				"ASYNC-FIRST, REMOTE-READY",
				"DÉMÊLEUR DE COMPLEXITÉ",
			],
		},
	},

	opensource: [
		{
			title: "Carnet Secret",
			link: "https://carnet-secret.1h12.com",
			type: "APP",
			year: "2025",
			description: {
				en: "Game: Ten trials to walk in the footsteps of Arsène Lupin",
				fr: "Jeu : Dix épreuves pour marcher dans les pas d'Arsène Lupin",
			},
		},
		{
			title: "Spritewave",
			link: "https://spritewave.1h12.com",
			type: "APP",
			year: "2025",
			description: {
				en: "Spritesheet generator. Preview, pack and export sprites",
				fr: "Générateur de spritesheet. Aperçu, assemblage et exportation de sprites",
			},
		},
		{
			title: "Chromacut",
			link: "https://chromacut.1h12.com",
			type: "APP",
			year: "2025",
			description: {
				en: "Turn AI generations into transparent PNGs",
				fr: "Transformez les générations IA en PNG transparents",
			},
		},
		{
			title: "prisma-searchparams-mapper",
			link: "https://www.npmjs.com/package/prisma-searchparams-mapper",
			type: "NPM PACKAGE",
			year: "2025",
			description: {
				en: "Typesafe utility to map URL search params to Prisma request.",
				fr: "Utilitaire typesafe pour mapper les paramètres de recherche URL vers les requêtes Prisma.",
			},
		},
		{
			title: "mm°dex",
			link: "https://mmdex.1h12.com",
			type: "APP",
			year: "2024",
			description: {
				en: "Weather app: rank the reel feel",
				fr: "App météo : évaluez le ressenti réel",
			},
		},
	],

	resume: {
		experience: [
			{
				role: {
					en: "Full Stack TypeScript Developer",
					fr: "Développeur Full Stack TypeScript",
				},
				company: "INFORCA S.A.M",
				period: { en: "Aug 2022 - Present", fr: "Août 2022 - Présent" },
				location: "Remote / Monaco",
				details: {
					en: [
						"<strong>PIM (Product Information Management)</strong>: Monorepo for a fashion B2C client handling 1M+ products. Two Next.js apps with role-based UIs, two backend instances (API + async worker), job queue with pg-boss, full infra on Coolify with Docker Compose.",
						"<strong>AI Fashion Photo Studio</strong>: Batch photo processing pipeline built on top of the PIM, raw hanger photo import, ghost mannequin generation, and AI-powered model shots (Gemini) for front and back views, industrializing product photography at scale.",
						"<strong>SaaS Coaching Platform</strong> (Next.js 16, TypeScript, PostgreSQL): Built a platform for 300 coaches and coachees with role-based interfaces, automated PDF generation, and Stripe subscription management.",
						"<strong>Rally App (iOS/Android)</strong>: Built a B2B React Native CLI application for regularity rallies.",
					],
					fr: [
						"<strong>PIM (Product Information Management)</strong> : Monorepo pour un client B2C mode gérant 1M+ produits. Deux apps Next.js avec interfaces par rôle, deux instances backend (API + worker asynchrone), queue de jobs avec pg-boss, infra complète sur Coolify avec Docker Compose.",
						"<strong>Studio Photo Fashion IA</strong> : Pipeline de traitement batch construit sur le PIM — import de photos brutes sur cintre, génération de visuels ghost mannequin, et génération de modèles portés par IA (Gemini) en vues face et dos, industrialisant la production photo produit.",
						"<strong>Plateforme de coaching SaaS</strong> (Next.js 16, TypeScript, PostgreSQL) : Construction d'une plateforme pour 300 coachs et coachés avec des interfaces basées sur les rôles, génération automatisée de PDF et gestion des abonnements Stripe.",
						"<strong>App Rallye (iOS/Android)</strong> : Création d'une application React Native CLI B2B pour les rallyes de régularité.",
					],
				},
			},
			{
				role: { en: "Front-end Developer", fr: "Développeur Front-end" },
				company: "Alltricks.com",
				period: { en: "Jan 2022 - Aug 2022", fr: "Janv 2022 - Août 2022" },
				location: "Bouc-Bel-Air",
				details: {
					en: [
						"<strong>E-commerce Optimization</strong>: Developed high-performance features for France's leading sports outdoor e-commerce platform using React, Next.js, and Redux Toolkit.",
						"<strong>Codebase Modernization</strong>: Led the migration of legacy modules to TypeScript, improving maintainability and type safety.",
					],
					fr: [
						"<strong>Optimisation E-commerce</strong> : Développement de fonctionnalités haute performance pour le leader français du e-commerce sport outdoor, avec React, Next.js et Redux Toolkit.",
						"<strong>Modernisation de la base de code</strong> : Direction de la migration de modules legacy vers TypeScript, améliorant la maintenabilité et la sécurité du typage.",
					],
				},
			},
			{
				role: { en: "Front-end Developer", fr: "Développeur Front-end" },
				company: "Internethic",
				period: { en: "Apr 2020 - Dec 2021", fr: "Avril 2020 - Déc 2021" },
				location: "Marseille",
				details: {
					en: [
						"<strong>B2B SaaS Architecture</strong>: Built a complex Vue.js/Tailwind application with a focus on UX/UI.",
						"<strong>Design System</strong>: Created a scalable custom component library and dedicated API stores.",
						"<strong>Quality Assurance</strong>: Implemented comprehensive Unit Testing and Storybook documentation workflows.",
					],
					fr: [
						"<strong>Architecture SaaS B2B</strong> : Construction d'une application complexe en Vue.js/Tailwind avec un focus sur l'UX/UI.",
						"<strong>Design System</strong> : Création d'une bibliothèque de composants personnalisés évolutive et de stores API dédiés.",
						"<strong>Assurance Qualité</strong> : Mise en place de flux de travail complets pour les tests unitaires et la documentation Storybook.",
					],
				},
			},
			{
				role: {
					en: "Front-end Web Developer",
					fr: "Développeur Web Front-end",
				},
				company: "High Testing R&D",
				period: { en: "Apr 2019 - Mar 2020", fr: "Avril 2019 - Mars 2020" },
				location: "Marseille",
				details: {
					en: [
						"<strong>Data Visualization</strong>: Developed interactive map-based applications using OpenLayers and Vue.js (Vuex, Vuetify).",
						"<strong>UI Integration</strong>: Bridged design and development with pixel-perfect integration on Django CMS / Symfony.",
						"<strong>Prototyping</strong>: Created high-fidelity wireframes and prototypes on Figma.",
					],
					fr: [
						"<strong>Visualisation de données</strong> : Développement d'applications cartographiques interactives utilisant OpenLayers et Vue.js (Vuex, Vuetify).",
						"<strong>Intégration UI</strong> : Liaison entre le design et le développement avec une intégration pixel-perfect sur Django CMS / Symfony.",
						"<strong>Prototypage</strong> : Création de wireframes et de prototypes haute fidélité sur Figma.",
					],
				},
			},
			{
				role: {
					en: "Digital Project Manager & Journalist",
					fr: "Chef de projet numérique & Journaliste",
				},
				company: "La Provence",
				period: { en: "Jun 2007 - Mar 2019", fr: "Juin 2007 - Mars 2019" },
				location: "Marseille",
				description: {
					en: "12-year tenure evolving from Web Developer to Digital Lead.",
					fr: "12 ans d'évolution, passant de Développeur Web à Responsable Numérique.",
				},
				details: {
					en: [
						"<strong>Journalist (2016-2019)</strong>: Articles on History, Heritage and Data Journalism. Hosted a web series, created new editorial formats (data journalism, video). Trained the newsroom on digital strategies.",
						"<strong>Digital Project Manager (2010-2016)</strong>: Led major web/mobile redesigns (LaProvence.com) and election mapping apps. Managed specs, UX/UI, and SEO.",
						"<strong>Web Developer (2007-2010)</strong>: Handled front-end development (CSS, PHP, JS) and created interactive editorial modules.",
					],
					fr: [
						"<strong>Journaliste (2016-2019)</strong> : Articles sur l'Histoire, le Patrimoine et le Data Journalisme. Animation d'une websérie, création de nouveaux formats éditoriaux (data journalisme, vidéo). Formation de la rédaction aux stratégies numériques.",
						"<strong>Chef de projet numérique (2010-2016)</strong> : Direction de refontes web/mobiles majeures (LaProvence.com) et d'applications de cartographie électorale. Gestion des spécifications, de l'UX/UI et du SEO.",
						"<strong>Développeur Web (2007-2010)</strong> : Développement front-end (CSS, PHP, JS) et création de modules éditoriaux interactifs.",
					],
				},
			},
			{
				role: {
					en: "Web Developer (Freelance)",
					fr: "Développeur Web (Freelance)",
				},
				company: "Indépendant",
				period: "2001 - 2007",
				location: "Marseille",
				details: {
					en: [
						"<strong>UI Integration & Design</strong>: Built custom websites with a strong focus on visual integration and front-end design, using HTML/CSS, JavaScript, and PHP.",
						"<strong>Early Web Standards</strong>: Laid the foundation in semantic HTML, accessible markup, and emerging CSS standards.",
					],
					fr: [
						"<strong>Intégration UI & Design</strong> : Création de sites web sur mesure avec un fort accent sur l'intégration visuelle et le design front-end, en HTML/CSS, JavaScript et PHP.",
						"<strong>Standards du web naissant</strong> : Apprentissage du HTML sémantique, du balisage accessible et des standards CSS émergents.",
					],
				},
			},
		],
		education: [
			{
				degree: "Master Communication : Concepteur Multimédia",
				school: { en: "Avignon University", fr: "Université d'Avignon" },
				period: "1999 - 2001",
			},
		],
		teaching: [
			{
				role: {
					en: "Data Journalism Module Instructor",
					fr: "Intervenant module Data Journalisme",
				},
				school: {
					en: "Aix-Marseille University",
					fr: "Aix-Marseille Université",
				},
				period: "2014 - 2018",
			},
			{
				role: {
					en: "Journalism & Social Media Module Instructor",
					fr: "Intervenant module Journalisme & Réseaux Sociaux",
				},
				school: {
					en: "European Institute of Journalism (IEJ) Marseille",
					fr: "Institut Européen de Journalisme (IEJ) Marseille",
				},
				period: "2013 - 2015",
			},
		],
	},

	ui: {
		sections: {
			about: { en: "About", fr: "À propos" },
			experience: { en: "Experience", fr: "Expérience" },
			projects: { en: "Projects", fr: "Projets" },
			skills: { en: "Skills", fr: "Compétences" },
		},
		resume: {
			about: { en: "About", fr: "À propos" },
			experience: { en: "Experience", fr: "Expérience" },
			skills: { en: "Skills", fr: "Compétences" },
			teaching: { en: "Teaching", fr: "Enseignement" },
			education: { en: "Education", fr: "Formation" },
			languages: { en: "Languages", fr: "Langues" },
		},
		skillLabels: {
			soft: { en: "Soft Skills", fr: "Savoir-être" },
			ai: { en: "AI Coding", fr: "Codage IA" },
			tech: "Tech",
			languages: { en: "Languages", fr: "Langues" },
		},
		nav: {
			back:   { en: "← Back",              fr: "← Retour"      },
			print:  { en: "Print / Save as PDF", fr: "Imprimer / PDF" },
			resume: { en: "RESUME",              fr: "CV"             },
		},
	},
};
