/** biome-ignore-all lint/correctness/noUnusedVariables: <no need to export the module> */

const PORTFOLIO_DATA = {
    profile: {
        firstname: "Nicolas",
        lastname: "Bocquet",
        email: "nicolas.fow@gmail.com",
        location: "Marseille, FR",
        domain: "1h12.com",
        role:      { en: "Full Stack TypeScript Developer", fr: "Développeur Full Stack TypeScript" },
        shortRole: "Full Stack TypeScript"
    },

    bio: {
        short: {
            en: "Full Stack TypeScript Developer based in Marseille. Expert in React/Next.js ecosystem with a background in digital project management. Passionate about clean code, UX/UI, and product vision.",
            fr: "Développeur Full Stack TypeScript basé à Marseille. Expert de l'écosystème React/Next.js avec un parcours en gestion de projet digital. Passionné par le clean code, l'UX/UI et la vision produit."
        },
        long: {
            en: "Full Stack TypeScript Developer with a unique background in journalism and digital project management. Based in Marseille, I combine technical expertise (React, Next.js, Node.js) with a sharp eye for UX/UI and a product-oriented mindset. I build robust, user-centric web applications and enjoy mentoring teams on modern web standards.",
            fr: "Développeur Full Stack TypeScript avec un parcours unique en journalisme et gestion de projet digital. Basé à Marseille, je combine expertise technique (React, Next.js, Node.js) avec un œil aiguisé pour l'UX/UI et un état d'esprit orienté produit. Je construis des applications web robustes et centrées sur l'utilisateur et j'apprécie accompagner les équipes sur les standards du web moderne."
        }
    },

    skills: {
        tech: [
            "JAVASCRIPT / TYPESCRIPT",
            "REACT / NEXT.JS", "REACT NATIVE",
            "NODE.JS / NESTJS", "POSTGRESQL", "DRIZZLE, PRISMA",
            "VUE.JS", "TAILWIND CSS",
            "REDUX / ZUSTAND", "WEBGL / THREE.JS",
            "TESTING (VITEST / PLAYWRIGHT)",
            "GIT / CI/CD / MONOREPO", "FIGMA / UI DESIGN"
        ],
        ai: ["CLAUDE CODE CLI", "CODEX", "ANTIGRAVITY"],
        soft: {
            en: ["USER CENTRIC", "SHARP UX/UI & DESIGN EYE", "PROJECT OWNERSHIP & VISION", "HIGH QUALITY DELIVERY", "TEAM LEADERSHIP", "MENTORING", "PROBLEM SOLVING"],
            fr: ["CENTRÉ UTILISATEUR", "OEIL UX/UI & DESIGN AIGUISÉ", "PROPRIÉTÉ & VISION PRODUIT", "LIVRAISON HAUTE QUALITÉ", "LEADERSHIP D'ÉQUIPE", "MENTORAT", "RÉSOLUTION DE PROBLÈMES"]
        }
    },

    opensource: [
        {
            title: "Carnet Secret",
            link: "https://carnet-secret.1h12.com",
            type: "APP",
            year: "2025",
            description: { en: "Game: Ten trials to walk in the footsteps of Arsène Lupin", fr: "Jeu : Dix épreuves pour marcher dans les pas d'Arsène Lupin" }
        },
        {
            title: "Spritewave",
            link: "https://spritewave.1h12.com",
            type: "APP",
            year: "2025",
            description: { en: "Spritesheet generator. Preview, pack and export sprites", fr: "Générateur de spritesheet. Aperçu, assemblage et exportation de sprites" }
        },
        {
            title: "Chromacut",
            link: "https://chromacut.1h12.com",
            type: "APP",
            year: "2025",
            description: { en: "Turn AI generations into transparent PNGs", fr: "Transformez les générations IA en PNG transparents" }
        },
        {
            title: "prisma-searchparams-mapper",
            link: "https://www.npmjs.com/package/prisma-searchparams-mapper",
            type: "NPM PACKAGE",
            year: "2025",
            description: { en: "Typesafe utility to map URL search params to Prisma request.", fr: "Utilitaire typesafe pour mapper les paramètres de recherche URL vers les requêtes Prisma." }
        },
        {
            title: "mm°dex",
            link: "https://mmdex.1h12.com",
            type: "APP",
            year: "2024",
            description: { en: "Weather app: rank the reel feel", fr: "App météo : évaluez le ressenti réel" }
        }
    ],

    resume: {
        experience: [
            {
                role:     { en: "Full Stack TypeScript Developer",       fr: "Développeur Full Stack TypeScript" },
                company:  "INFORCA S.A.M",
                period:   { en: "Aug 2022 - Present",                    fr: "Août 2022 - Présent" },
                location: "Remote / Monaco",
                details: {
                    en: [
                        "<strong>SaaS Coaching Platform</strong> (Next.js 16, TypeScript, PostgreSQL): Built a platform with role-based interfaces, automated PDF generation, and Stripe subscription management.",
                        "<strong>PIM (Product Information Management)</strong>: Developed a monorepo solution (Next.js / NestJS / PostgreSQL) for a fashion B2C client.",
                        "<strong>Rally App (iOS/Android)</strong>: Built a B2B React Native CLI application for regularity rallies."
                    ],
                    fr: [
                        "<strong>Plateforme de coaching SaaS</strong> (Next.js 16, TypeScript, PostgreSQL) : Construction d'une plateforme avec des interfaces basées sur les rôles, génération automatisée de PDF et gestion des abonnements Stripe.",
                        "<strong>PIM (Product Information Management)</strong> : Développement d'une solution monorepo (Next.js / NestJS / PostgreSQL) pour un client B2C dans le secteur de la mode.",
                        "<strong>App Rallye (iOS/Android)</strong> : Création d'une application React Native CLI B2B pour les rallyes de régularité."
                    ]
                }
            },
            {
                role:     { en: "Front-end Developer",    fr: "Développeur Front-end" },
                company:  "Alltricks.com",
                period:   { en: "Jan 2022 - Aug 2022",   fr: "Janv 2022 - Août 2022" },
                location: "Bouc-Bel-Air",
                details: {
                    en: [
                        "<strong>E-commerce Optimization</strong>: Developed high-performance features for a major e-commerce site using React, Next.js, and Redux Toolkit.",
                        "<strong>Codebase Modernization</strong>: Led the migration of legacy modules to TypeScript, improving maintainability and type safety."
                    ],
                    fr: [
                        "<strong>Optimisation E-commerce</strong> : Développement de fonctionnalités haute performance pour un site e-commerce majeur utilisant React, Next.js et Redux Toolkit.",
                        "<strong>Modernisation de la base de code</strong> : Direction de la migration de modules legacy vers TypeScript, améliorant la maintenabilité et la sécurité du typage."
                    ]
                }
            },
            {
                role:     { en: "Front-end Developer",      fr: "Développeur Front-end" },
                company:  "Internethic",
                period:   { en: "Apr 2020 - Dec 2021",      fr: "Avril 2020 - Déc 2021" },
                location: "Marseille",
                details: {
                    en: [
                        "<strong>B2B SaaS Architecture</strong>: Built a complex Vue.js/Tailwind application with a focus on UX/UI.",
                        "<strong>Design System</strong>: Created a scalable custom component library and dedicated API stores.",
                        "<strong>Quality Assurance</strong>: Implemented comprehensive Unit Testing and Storybook documentation workflows."
                    ],
                    fr: [
                        "<strong>Architecture SaaS B2B</strong> : Construction d'une application complexe en Vue.js/Tailwind avec un focus sur l'UX/UI.",
                        "<strong>Design System</strong> : Création d'une bibliothèque de composants personnalisés évolutive et de stores API dédiés.",
                        "<strong>Assurance Qualité</strong> : Mise en place de flux de travail complets pour les tests unitaires et la documentation Storybook."
                    ]
                }
            },
            {
                role:     { en: "Front-end Web Developer",   fr: "Développeur Web Front-end" },
                company:  "High Testing R&D",
                period:   { en: "Apr 2019 - Mar 2020",       fr: "Avril 2019 - Mars 2020" },
                location: "Marseille",
                details: {
                    en: [
                        "<strong>Data Visualization</strong>: Developed interactive map-based applications using OpenLayers and Vue.js (Vuex, Vuetify).",
                        "<strong>UI Integration</strong>: Bridged design and development with pixel-perfect integration on Django CMS / Symfony.",
                        "<strong>Prototyping</strong>: Created high-fidelity wireframes and prototypes on Figma."
                    ],
                    fr: [
                        "<strong>Visualisation de données</strong> : Développement d'applications cartographiques interactives utilisant OpenLayers et Vue.js (Vuex, Vuetify).",
                        "<strong>Intégration UI</strong> : Liaison entre le design et le développement avec une intégration pixel-perfect sur Django CMS / Symfony.",
                        "<strong>Prototypage</strong> : Création de wireframes et de prototypes haute fidélité sur Figma."
                    ]
                }
            },
            {
                role:        { en: "Digital Project Manager & Journalist", fr: "Chef de projet digital & Journaliste" },
                company:     "La Provence",
                period:      { en: "Jun 2007 - Mar 2019",                  fr: "Juin 2007 - Mars 2019" },
                location:    "Marseille",
                description: { en: "12-year tenure evolving from Web Developer to Digital Lead.", fr: "12 ans d'évolution, passant de Développeur Web à Responsable Digital." },
                details: {
                    en: [
                        "<strong>Journalist (2016-2019)</strong>: Authored articles focused on History, Heritage, and Data Journalism. Trained the newsroom on digital strategies.",
                        "<strong>Digital Project Manager (2010-2016)</strong>: Led major web/mobile redesigns (LaProvence.com) and election mapping apps. Managed specs, UX/UI, and SEO.",
                        "<strong>Web Developer (2007-2010)</strong>: Handled front-end development (CSS, PHP, JS) and created interactive editorial modules."
                    ],
                    fr: [
                        "<strong>Journaliste (2016-2019)</strong> : Rédaction d'articles axés sur l'Histoire, le Patrimoine et le Data Journalisme. Formation de la rédaction aux stratégies numériques.",
                        "<strong>Chef de projet digital (2010-2016)</strong> : Direction de refontes web/mobiles majeures (LaProvence.com) et d'applications de cartographie électorale. Gestion des spécifications, de l'UX/UI et du SEO.",
                        "<strong>Développeur Web (2007-2010)</strong> : Développement front-end (CSS, PHP, JS) et création de modules éditoriaux interactifs."
                    ]
                }
            },
            {
                role:     { en: "Web Developer (Freelance)",     fr: "Développeur Web (Freelance)" },
                company:  "Indépendant",
                period:   "2001 - 2007",
                location: "Marseille",
                details: {
                    en: [
                        "<strong>Full Stack Development</strong>: Created custom websites using PHP, JavaScript, and HTML/CSS for various clients.",
                        "<strong>Early Web Standards</strong>: Focused on semantic HTML and emerging CSS standards."
                    ],
                    fr: [
                        "<strong>Développement Full Stack</strong> : Création de sites web sur mesure utilisant PHP, JavaScript et HTML/CSS pour divers clients.",
                        "<strong>Débuts des standards web</strong> : Focus sur le HTML sémantique et les standards CSS émergents."
                    ]
                }
            }
        ],
        education: [
            {
                degree: "Master Communication : Concepteur Multimédia",
                school: { en: "Avignon University", fr: "Université d'Avignon" },
                period: "1999 - 2001"
            }
        ],
        teaching: [
            {
                role:   { en: "Data Journalism Module Instructor",              fr: "Intervenant module Data Journalisme" },
                school: { en: "Aix-Marseille University",                       fr: "Aix-Marseille Université" },
                period: "2014 - 2018"
            },
            {
                role:   { en: "Journalism & Social Media Module Instructor",    fr: "Intervenant module Journalisme & Réseaux Sociaux" },
                school: { en: "European Institute of Journalism (IEJ) Marseille", fr: "Institut Européen de Journalisme (IEJ) Marseille" },
                period: "2013 - 2015"
            }
        ]
    },

    ui: {
        sections: {
            about:      { en: "About",      fr: "À propos" },
            experience: { en: "Experience", fr: "Expérience" },
            projects:   { en: "Projects",   fr: "Projets" },
            skills:     { en: "Skills",     fr: "Compétences" }
        },
        resume: {
            about:      { en: "About",      fr: "À propos" },
            experience: { en: "Experience", fr: "Expérience" },
            skills:     { en: "Skills",     fr: "Compétences" },
            teaching:   { en: "Teaching",   fr: "Enseignement" },
            education:  { en: "Education",  fr: "Formation" }
        },
        skillLabels: {
            soft: { en: "Soft Skills", fr: "Savoir-être" },
            ai:   { en: "AI Coding",   fr: "Codage IA" },
            tech: "Tech"
        },
        nav: {
            back:  { en: "← Back",              fr: "← Retour" },
            print: { en: "Print / Save as PDF", fr: "Imprimer / PDF" }
        }
    }
};
