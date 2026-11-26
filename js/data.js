/** biome-ignore-all lint/correctness/noUnusedVariables: <no need to export the module> */

const PORTFOLIO_DATA = {
	profile: {
		firstname: "Nicolas",
		lastname: "Bocquet",
		email: "nicolas@1h12.com",
		location: "Marseille, FR",
		domain: "1h12.com",
		shortRole: "Product Engineer",
		tagline: {
			lead: {
				en: "This is what I make on the side.",
				fr: "Ici, ce que je fabrique à côté.",
			},
			rest: {
				en: "Games and apps that started from an urge: to delight my daughter, to fix what annoys me, to see how far the models go.",
				fr: "Des jeux et des apps partis d'une envie : faire plaisir à ma fille, corriger ce qui m'agace, voir jusqu'où vont les modèles.",
			},
		},
		premise: {
			en: "None of them is hand-coded. Each one was a test bench for the models of its day.",
			fr: "Aucun n'est codé à la main. Chacun a servi de banc d'essai aux modèles du moment.",
		},
		status: {
			en: "Open to opportunities · CDI · Remote or Marseille area",
			fr: "À l'écoute des opportunités · CDI · Remote ou région marseillaise",
		},
	},

	bio: {
		short: {
			en: "On the web since 1999, including twelve years at La Provence, a regional daily, as digital project manager and then journalist. Since late 2025 I no longer write the code: I decide what to build, direct the agents that write it, and answer for what ships. My job now rests on what can't be delegated: direction, a critical eye, and high standards for UX and UI.",
			fr: "Dans le web depuis 1999, dont douze ans à La Provence comme chef de projet numérique puis journaliste. Depuis fin 2025, je n'écris plus le code : je décide quoi construire, je dirige les agents qui l'écrivent et je réponds de ce qui part en production. Mon métier tient désormais à ce qui ne se délègue pas : la direction, le regard critique, l'exigence sur l'UX et l'UI.",
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
		product: {
			en: [
				"PRODUCT FRAMING",
				"UX / UI",
				"DESIGN SYSTEMS",
				"FIGMA",
				"SPECIFICATION",
				"WRITING",
			],
			fr: [
				"CADRAGE PRODUIT",
				"UX / UI",
				"DESIGN SYSTEM",
				"FIGMA",
				"SPÉCIFICATION",
				"ÉCRITURE",
			],
		},
		ai: {
			en: ["CLAUDE CODE", "CODEX", "AGENTIC WORKFLOWS", "GEMINI (IMAGE)"],
			fr: ["CLAUDE CODE", "CODEX", "WORKFLOWS AGENTIQUES", "GEMINI (IMAGE)"],
		},
		tech: [
			"TYPESCRIPT",
			"REACT / NEXT.JS",
			"REACT NATIVE",
			"NODE.JS / NESTJS",
			"POSTGRESQL",
			"VITEST / PLAYWRIGHT",
			"DOCKER / COOLIFY",
			"CI/CD",
		],
		languages: [
			{ name: "Français", level: { en: "Native", fr: "Langue maternelle" } },
			{ name: "English", level: { en: "Professional", fr: "Professionnel" } },
		],
	},

	projects: [
		{
			slug: "quizzard",
			title: "Quizzard",
			link: null,
			host: "quizzard.1h12.com",
			stack: ["React", "TypeScript", "Vite", "PWA"],
			year: "2026",
			date: "2026-11",
			description: {
				en: "Game: a pixel-art quiz RPG, playable offline",
				fr: "Jeu : un RPG de quiz en pixel art, jouable hors ligne",
			},
			featured: true,
			status: "soon",
			format: "phone",
			shots: [
				{
					src: "img/work/quizzard-1.webp",
					alt: {
						en: "Quizzard title screen in pixel art: a wizard facing a ghost",
						fr: "L'écran titre de Quizzard en pixel art : un magicien face à un fantôme",
					},
				},
				{
					src: "img/work/quizzard-2.webp",
					alt: {
						en: "The world map: five realms around the Quiz Tower",
						fr: "La carte du monde : cinq royaumes autour de la Tour de Quiz",
					},
				},
				{
					src: "img/work/quizzard-3.webp",
					alt: {
						en: "A fight: the question, the chosen answer and the certainty stake",
						fr: "Un combat : la question, la réponse choisie et la mise de certitude",
					},
				},
			],
			pitch: {
				en: "A pixel-art RPG where you fight by answering questions, then staking how sure you are. Made for my daughter, open to everyone.",
				fr: "Un RPG en pixel art où l'on se bat en répondant à des questions, puis en misant sa certitude. Fait pour ma fille, ouvert à tout le monde.",
			},
			question: {
				en: "Can one agent check another's work?",
				fr: "Un agent peut-il relire le travail d'un autre ?",
			},
			models: "Claude Fable 5.2 · Opus 5.5 · Haiku 5.5",
			story: {
				idea: {
					en: "A game for my daughter, who is in sixth grade: a role-playing game where every fight is a question, and where you bet on your own answer.",
					fr: "Un jeu pour ma fille, en 6e : un jeu de rôle où chaque combat est une question, et où l'on parie sur sa propre réponse.",
				},
				iterations: {
					en: "It started as a revision tool for maths and English. Three days in, school questions were handed to the villain and the worlds became general knowledge: it had to be a game before being a holiday workbook.",
					fr: "Le jeu est parti comme un outil de révision de maths et d'anglais. Au bout de trois jours, les questions de cours ont été confiées au méchant et les mondes sont devenus de la culture générale : il fallait un jeu avant un cahier de vacances.",
				},
				bench: {
					en: "The 620 questions are written by AI. A second agent rereads them without knowing the right answer, and a third tries to prove the facts wrong.",
					fr: "Les 620 questions sont écrites par IA. Un second agent les relit sans connaître la bonne réponse, et un troisième cherche à prendre les faits en défaut.",
				},
			},
		},
		{
			slug: "goodpitch",
			title: "GoodPitch",
			link: "https://goodpitch.1h12.com",
			stack: ["TanStack Start", "PostgreSQL"],
			year: "2026",
			date: "2026-07",
			description: {
				en: "Procedural quiz generation from a film's pitch",
				fr: "Génération de quiz procédural à partir du pitch d'un film",
			},
			featured: true,
			status: "live",
			launched: "2026-07-16",
			format: "phone",
			shots: [
				{
					src: "img/work/goodpitch-1.webp",
					alt: {
						en: "GoodPitch home: the quiz of the day and four more",
						fr: "L'accueil de GoodPitch : le quiz du jour et quatre autres",
					},
				},
				{
					src: "img/work/goodpitch-2.webp",
					alt: {
						en: "A pitch in progress: one sentence, two names redacted",
						fr: "Un pitch en cours : une phrase, deux noms masqués",
					},
				},
				{
					src: "img/work/goodpitch-3.webp",
					alt: {
						en: "The final score: 9 titles found out of 10, with the list of films",
						fr: "Le score final : 9 titres trouvés sur 10, avec la liste des films",
					},
				},
			],
			pitch: {
				en: "Guess a film from its official synopsis, revealed sentence by sentence. Five quizzes a day, the same for everyone, one attempt.",
				fr: "Deviner un film à partir de son synopsis officiel, dévoilé phrase par phrase. Cinq quiz par jour, les mêmes pour tout le monde, un seul essai.",
			},
			question: {
				en: "How long from an idea to a live product?",
				fr: "Combien de temps entre une idée et un produit en ligne ?",
			},
			models: "Claude Fable 5 · Opus 4.8",
			story: {
				idea: {
					en: "It came from a film quiz whose principle I liked more than its execution. I wanted the same game, with nothing in the way.",
					fr: "L'envie est venue d'un quiz de cinéma dont j'aimais le principe plus que l'exécution. Je voulais le même jeu, sans rien qui gêne.",
				},
				iterations: {
					en: "The first version built fake animated trailers. Three days later only bare text on a flat colour was left, and the game was better for it. The timer and the streak counter went the same way.",
					fr: "La première version fabriquait de fausses bandes-annonces animées. Trois jours plus tard il ne restait que du texte nu sur un aplat de couleur, et le jeu y a gagné. Le chronomètre et le compteur de séries ont suivi le même chemin.",
				},
				bench: {
					en: "Four days between the first commit and the first published quiz. Since late July the game has published five quizzes a day without me touching it.",
					fr: "Quatre jours entre le premier commit et le premier quiz publié. Depuis fin juillet, le jeu publie cinq quiz par jour sans que j'y touche.",
				},
			},
		},
		{
			slug: "bulle",
			title: "Bulle",
			link: "https://bulle.1h12.com",
			stack: ["Go", "PostgreSQL", "Next.js", "Connect RPC"],
			year: "2026",
			date: "2026-06",
			description: {
				en: "Share films & series within closed communities, react and discuss in threads",
				fr: "Partager films & séries dans des communautés fermées, réagir et discuter en fils",
			},
			featured: true,
			status: "live",
			format: "phone",
			shots: [
				{
					src: "img/work/bulle-1.webp",
					alt: {
						en: "A demo circle in Bulle: the list of shared titles",
						fr: "Une bulle de démonstration : la liste des œuvres partagées",
					},
				},
				{
					src: "img/work/bulle-2.webp",
					alt: {
						en: "A film's page, with its recommendation and reactions",
						fr: "La fiche d'un film, avec sa recommandation et ses réactions",
					},
				},
				{
					src: "img/work/bulle-3.webp",
					alt: {
						en: "A film's discussion thread, with a hidden spoiler",
						fr: "Le fil de discussion d'un film, avec un spoiler masqué",
					},
				},
			],
			pitch: {
				en: "Talk about films, series, games and books in private, invite-only circles, with one thread per title.",
				fr: "Parler de films, séries, jeux et livres dans des cercles privés sur invitation, avec un fil par œuvre.",
			},
			question: {
				en: "Can you ship a backend in a language you can't write?",
				fr: "Peut-on livrer un backend dans un langage qu'on ne sait pas écrire ?",
			},
			models: "Claude · Go",
			story: {
				idea: {
					en: "In a group chat, a film recommendation drowns within ten messages and someone ends up giving away the ending. Bulle gives each title its own thread, in a private circle, with spoilers hidden.",
					fr: "Dans un groupe de messagerie, une recommandation de film se noie en dix messages et quelqu'un finit par raconter la fin. Bulle donne à chaque œuvre son propre fil, dans un cercle privé, avec les spoilers masqués.",
				},
				iterations: {
					en: "Every feature faces one test: could this exist as-is in WhatsApp? Several did not survive: the “seen” status, a discussions hub removed after six days, up and down votes. The spoiler was reworked eight times.",
					fr: "Chaque fonctionnalité passe un test : est-ce que ça pourrait exister tel quel dans WhatsApp ? Plusieurs n'ont pas survécu : le statut « vu », un hub de discussions retiré au bout de six jours, les votes pour et contre. Le spoiler, lui, a été retravaillé huit fois.",
				},
				bench: {
					en: "I can't write Go. I picked it to see whether Claude could hold a backend I am unable to review line by line. What I control is the API contract and the behaviour, through end-to-end tests.",
					fr: "Je ne sais pas écrire de Go. J'ai choisi ce langage pour voir si Claude pouvait tenir un backend que je ne peux pas relire ligne à ligne. Ce que je contrôle, c'est le contrat d'API et le comportement, par des tests de bout en bout.",
				},
			},
		},
		{
			slug: "carnet-secret",
			title: "Le Carnet Secret",
			link: "https://carnet-secret.1h12.com",
			stack: ["Phaser", "React", "TypeScript", "Zustand"],
			year: "2025",
			date: "2025-12",
			description: {
				en: "Game: Ten trials to walk in the footsteps of Arsène Lupin",
				fr: "Jeu : Dix épreuves pour marcher dans les pas d'Arsène Lupin",
			},
			featured: true,
			status: "live",
			format: "wide",
			shots: [
				{
					src: "img/work/carnet-secret-1.webp",
					alt: {
						en: "The illustrated title screen: Paris seen from the rooftops",
						fr: "L'écran d'accueil illustré : Paris vu des toits",
					},
				},
				{
					src: "img/work/carnet-secret.webp",
					alt: {
						en: "The notebook open on the first trial, a map of Paris",
						fr: "Le carnet ouvert sur la première épreuve, une carte de Paris",
					},
				},
				{
					src: "img/work/carnet-secret-2.webp",
					alt: {
						en: "First trial: a route to memorise on a map of Paris",
						fr: "Première épreuve : un parcours à mémoriser sur un plan de Paris",
					},
				},
				{
					src: "img/work/carnet-secret-3.webp",
					alt: {
						en: "The Escape: a run across the Paris rooftops, dodging cats",
						fr: "L'Évasion : une course sur les toits de Paris, entre les chats",
					},
				},
			],
			pitch: {
				en: "An illustrated notebook to leaf through: ten trials of logic, memory and skill, each marked out of 10 by Arsène Lupin.",
				fr: "Un carnet illustré à feuilleter : dix épreuves de logique, de mémoire et d'adresse, notées sur 10 par Arsène Lupin.",
			},
			question: {
				en: "Can an AI illustrate an entire game?",
				fr: "Une IA peut-elle illustrer un jeu entier ?",
			},
			models: "Gemini · Claude Opus 4.5",
			story: {
				idea: {
					en: "It all started with wanting to make my daughter's eyes light up. She is a Lupin fan: I wanted a notebook in which the gentleman thief hands her his trials and marks them himself.",
					fr: "Tout est parti de l'envie de faire briller les yeux de ma fille. Elle est lupinophile : je voulais un carnet où le gentleman cambrioleur lui confie ses épreuves et les note lui-même.",
				},
				iterations: {
					en: "The game began as a narrative adventure with three houses and an inventory. All of that went. The menu changed three times: a map of Paris, a case file, then a notebook you leaf through, which is at once the rulebook, the report card and the save file.",
					fr: "Le jeu a d'abord été une aventure narrative avec trois maisons et un inventaire. Tout cela a disparu. Le menu a changé trois fois : une carte de Paris, un dossier d'enquête, puis un carnet que l'on feuillette et qui sert à la fois de règle, de bulletin et de sauvegarde.",
				},
				bench: {
					en: "I am not an illustrator. Gemini produced the sets, the textures and the sepia mood, and Claude wrote the code. I had to build two small tools to cut out and animate the generated images.",
					fr: "Je ne suis pas illustrateur. Gemini a fabriqué les décors, les textures et l'ambiance sépia, et Claude a écrit le code. J'ai dû construire deux petits outils pour détourer et animer les images générées.",
				},
			},
		},
		{
			title: "prisma-searchparams-mapper",
			link: "https://www.npmjs.com/package/prisma-searchparams-mapper",
			stack: ["TypeScript", "Prisma", "Zero-dependency"],
			year: "2025",
			description: {
				en: "Typesafe utility to map URL search params to Prisma request.",
				fr: "Utilitaire typesafe pour mapper les paramètres de recherche URL vers les requêtes Prisma.",
			},
		},
		{
			title: "mm°dex",
			link: "https://mmdex.1h12.com",
			stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
			year: "2024",
			description: {
				en: "Weather app: rank the real feel",
				fr: "App météo : évaluez le ressenti réel",
			},
		},
	],

	method: [
		{
			en: "I write the rule, not the code.",
			fr: "J'écris la règle, pas le code.",
		},
		{
			en: "Every feature ships with its test.",
			fr: "Chaque fonctionnalité arrive avec son test.",
		},
		{
			en: "One agent writes, another checks.",
			fr: "Un agent écrit, un autre vérifie.",
		},
		{
			en: "Dead ends are written down, so they stay closed.",
			fr: "Les impasses sont consignées, pour ne pas les rouvrir.",
		},
		{
			en: "I remove what doesn't earn its place.",
			fr: "Je retire ce qui ne sert pas.",
		},
	],

	career: {
		text: {
			en: "First website in 1999. Twelve years at La Provence, a regional daily, as digital project manager and then journalist. Back to building products in 2019, at INFORCA today.",
			fr: "Premier site web en 1999. Douze ans à La Provence, chef de projet numérique puis journaliste. De retour au produit en 2019, aujourd'hui chez INFORCA.",
		},
		origin: {
			en: "1h12 is the title of my graduation short film. I kept the domain.",
			fr: "1h12, c'est le titre de mon court-métrage de fin d'études. J'ai gardé le domaine.",
		},
	},

	resume: {
		experience: [
			{
				role: "Product Engineer",
				company: "INFORCA S.A.M",
				period: { en: "Aug 2022 - Present", fr: "Août 2022 - Présent" },
				start: "2022-08",
				location: "Remote / Monaco",
				details: {
					en: [
						"<strong>Fashion PIM</strong>: a product information system for a B2B fashion client, over a million products. Two role-based apps, an API and an async worker. I wrote the codebase by hand from 2022; since late 2025 it has kept evolving without me writing a line, through agents I direct. Stack: Next.js, PostgreSQL, pg-boss, Docker, Coolify.",
						"<strong>AI photo studio</strong>: built on top of the PIM, it starts from the raw hanger shot and batch-produces the ghost mannequin, then the garment worn, front and back (Gemini).",
						"<strong>Also</strong>: a SaaS coaching platform for 300 coaches and coachees (Stripe subscriptions, automated PDFs) and a React Native mobile app for regularity rallies.",
					],
					fr: [
						"<strong>PIM mode</strong> : système d'information produit pour un client B2B de la mode, plus d'un million de produits. Deux applications par rôle, une API et un worker asynchrone. J'ai écrit la base à la main à partir de 2022 ; depuis fin 2025, elle évolue sans que j'écrive une ligne, avec des agents que je dirige. Stack : Next.js, PostgreSQL, pg-boss, Docker, Coolify.",
						"<strong>Studio photo IA</strong> : construit sur le PIM, il part de la photo brute sur cintre et produit par lots le mannequin fantôme, puis le vêtement porté, de face et de dos (Gemini).",
						"<strong>Aussi</strong> : une plateforme SaaS de coaching pour 300 coachs et coachés (abonnements Stripe, PDF générés automatiquement) et une application mobile React Native pour des rallyes de régularité.",
					],
				},
			},
			{
				role: { en: "Front-end Developer", fr: "Développeur Front-end" },
				company: "Alltricks.com",
				period: { en: "Jan 2022 - Aug 2022", fr: "Janv 2022 - Août 2022" },
				start: "2022-01",
				end: "2022-08",
				location: "Bouc-Bel-Air",
				summary: {
					en: "E-commerce features for France's leading outdoor sports site (React, Next.js, Redux Toolkit), and the migration of legacy modules to TypeScript.",
					fr: "Fonctionnalités e-commerce pour le leader français du sport outdoor en ligne (React, Next.js, Redux Toolkit) et migration de modules legacy vers TypeScript.",
				},
			},
			{
				role: { en: "Front-end Developer", fr: "Développeur Front-end" },
				company: "Internethic",
				period: { en: "Apr 2020 - Dec 2021", fr: "Avril 2020 - Déc 2021" },
				start: "2020-04",
				end: "2021-12",
				location: "Marseille",
				summary: {
					en: "A B2B SaaS application in Vue.js and Tailwind, with its own component library, documented in Storybook and covered by unit tests.",
					fr: "Application SaaS B2B en Vue.js et Tailwind, avec sa bibliothèque de composants maison, documentée dans Storybook et couverte par des tests unitaires.",
				},
			},
			{
				role: {
					en: "Front-end Web Developer",
					fr: "Développeur Web Front-end",
				},
				company: "High Testing R&D",
				period: { en: "Apr 2019 - Mar 2020", fr: "Avril 2019 - Mars 2020" },
				start: "2019-04",
				end: "2020-03",
				location: "Marseille",
				summary: {
					en: "Interactive map-based applications (OpenLayers, Vue.js), wireframes and prototypes in Figma, front-end integration on Django CMS and Symfony.",
					fr: "Applications cartographiques interactives (OpenLayers, Vue.js), maquettes et prototypes sur Figma, intégration sur Django CMS et Symfony.",
				},
			},
			{
				role: {
					en: "Digital Project Manager & Journalist",
					fr: "Chef de projet numérique & Journaliste",
				},
				company: "La Provence",
				period: { en: "Jun 2007 - Mar 2019", fr: "Juin 2007 - Mars 2019" },
				start: "2007-06",
				end: "2019-03",
				location: "Marseille",
				details: {
					en: [
						"<strong>Journalist (2016-2019)</strong>: history, heritage and data journalism. Hosted a web series, created editorial formats (data, video), trained the newsroom in digital practices.",
						"<strong>Digital project manager (2010-2016)</strong>: web and mobile redesigns of LaProvence.com, election mapping apps. Specifications, UX/UI and SEO.",
						"<strong>Web developer (2007-2010)</strong>: front-end (CSS, PHP, JS) and interactive editorial modules.",
					],
					fr: [
						"<strong>Journaliste (2016-2019)</strong> : histoire, patrimoine et data journalisme. Animation d'une websérie, création de formats éditoriaux (data, vidéo), formation de la rédaction au numérique.",
						"<strong>Chef de projet numérique (2010-2016)</strong> : refontes web et mobile de LaProvence.com, applications de cartographie électorale. Spécifications, UX/UI et SEO.",
						"<strong>Développeur web (2007-2010)</strong> : front-end (CSS, PHP, JS) et modules éditoriaux interactifs.",
					],
				},
			},
			{
				role: {
					en: "Web Developer (Freelance)",
					fr: "Développeur Web (Freelance)",
				},
				company: { en: "Self-employed", fr: "Indépendant" },
				period: "2001 - 2007",
				location: "Marseille",
				summary: {
					en: "Custom websites, from UI integration to front-end design (HTML/CSS, JavaScript, PHP).",
					fr: "Sites web sur mesure, de l'intégration au design front-end (HTML/CSS, JavaScript, PHP).",
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
			method: { en: "Method", fr: "Méthode" },
			career: { en: "Background", fr: "Parcours" },
		},
		work: {
			live: { en: "Live", fr: "En ligne" },
			soon: { en: "Launching soon", fr: "Bientôt en ligne" },
			quiz: { en: "Quiz no.", fr: "Quiz n°" },
			bench: { en: "Test bench", fr: "Banc d'essai" },
			idea: { en: "The starting idea", fr: "L'idée de départ" },
			iterations: { en: "The iterations", fr: "Les itérations" },
			read: { en: "Read the project", fr: "Lire le projet" },
			all: { en: "All projects", fr: "Tous les projets" },
			next: { en: "Next project", fr: "Projet suivant" },
		},
		resume: {
			about: { en: "About", fr: "À propos" },
			experience: { en: "Experience", fr: "Expérience" },
			skills: { en: "Skills", fr: "Compétences" },
			projects: { en: "Side projects", fr: "Projets personnels" },
			projectsIntro: {
				en: "Made on the side, without writing the code. Each one was a test bench for the models of its day; the story behind each is on 1h12.com.",
				fr: "Faits à côté, sans écrire le code. Chacun a servi de banc d'essai aux modèles du moment ; le récit de chaque projet est sur 1h12.com.",
			},
			teaching: { en: "Teaching", fr: "Enseignement" },
			education: { en: "Education", fr: "Formation" },
			languages: { en: "Languages", fr: "Langues" },
		},
		skillLabels: {
			product: { en: "Product & design", fr: "Produit & design" },
			ai: { en: "Agents & AI", fr: "Agents & IA" },
			tech: "Tech",
		},
		nav: {
			back:   { en: "← Back",              fr: "← Retour"      },
			print:  { en: "Print / Save as PDF", fr: "Imprimer / PDF" },
			resume: { en: "RESUME",              fr: "CV"             },
			fullResume: { en: "Full resume", fr: "CV complet" },
		},
	},
};
