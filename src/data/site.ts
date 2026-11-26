import type { Localized } from '../i18n'

type Text = string | Localized

interface Job {
  role: Text
  company: Text
  period: Text
  location: string
  summary?: Localized
  details?: Localized<string[]>
}

interface Course {
  role: Localized
  school: Localized
  period: string
}

interface Degree {
  degree: string
  school: Localized
  period: string
}

interface Site {
  profile: {
    firstname: string
    lastname: string
    email: string
    location: string
    domain: string
    shortRole: string
    tagline: { lead: Localized; rest: Localized }
    premise: Localized
    status: Localized
  }
  bio: Localized
  skills: {
    product: Localized<string[]>
    ai: Localized<string[]>
    tech: string[]
    languages: { name: string; level: Localized }[]
  }
  method: Localized[]
  career: { text: Localized; origin: Localized }
  resume: { experience: Job[]; education: Degree[]; teaching: Course[] }
  ui: {
    sections: { method: Localized; career: Localized }
    work: Record<'live' | 'soon' | 'bench' | 'idea' | 'iterations' | 'read' | 'all' | 'next', Localized>
    resume: Record<'about' | 'experience' | 'skills' | 'projects' | 'projectsIntro' | 'teaching' | 'education' | 'languages', Localized>
    skillLabels: { product: Localized; ai: Localized; tech: string }
    nav: Record<'back' | 'print' | 'resume' | 'fullResume', Localized>
    meta: {
      home: { title: string; description: Localized }
      resume: { title: Localized; description: Localized }
    }
  }
}

export const site: Site = {
  profile: {
    firstname: 'Nicolas',
    lastname: 'Bocquet',
    email: 'nicolas@1h12.com',
    location: 'Marseille, FR',
    domain: '1h12.com',
    shortRole: 'Product Engineer',
    tagline: {
      lead: {
        en: 'This is what I make on the side.',
        fr: 'Ici, ce que je fabrique à côté.',
      },
      rest: {
        en: 'Games and apps that started from an urge: to delight my daughter, to fix what annoys me, to see how far the models go.',
        fr: "Des jeux et des apps partis d'une envie : faire plaisir à ma fille, corriger ce qui m'agace, voir jusqu'où vont les modèles.",
      },
    },
    premise: {
      en: 'None of them is hand-coded. Each one was a test bench for the models of its day.',
      fr: "Aucun n'est codé à la main. Chacun a servi de banc d'essai aux modèles du moment.",
    },
    status: {
      en: 'Open to opportunities · CDI · Remote or Marseille area',
      fr: "À l'écoute des opportunités · CDI · Remote ou région marseillaise",
    },
  },
  bio: {
    en: "On the web since 1999, including twelve years at La Provence, a regional daily, as digital project manager and then journalist. Since late 2025 I no longer write the code: I decide what to build, direct the agents that write it, and answer for what ships. My job now rests on what can't be delegated: direction, a critical eye, and high standards for UX and UI.",
    fr: "Dans le web depuis 1999, dont douze ans à La Provence comme chef de projet numérique puis journaliste. Depuis fin 2025, je n'écris plus le code : je décide quoi construire, je dirige les agents qui l'écrivent et je réponds de ce qui part en production. Mon métier tient désormais à ce qui ne se délègue pas : la direction, le regard critique, l'exigence sur l'UX et l'UI.",
  },
  skills: {
    product: {
      en: ['PRODUCT FRAMING', 'UX / UI', 'DESIGN SYSTEMS', 'FIGMA', 'SPECIFICATION', 'WRITING'],
      fr: ['CADRAGE PRODUIT', 'UX / UI', 'DESIGN SYSTEM', 'FIGMA', 'SPÉCIFICATION', 'ÉCRITURE'],
    },
    ai: {
      en: ['CLAUDE CODE', 'CODEX', 'AGENTIC WORKFLOWS', 'GEMINI (IMAGE)'],
      fr: ['CLAUDE CODE', 'CODEX', 'WORKFLOWS AGENTIQUES', 'GEMINI (IMAGE)'],
    },
    tech: ['TYPESCRIPT', 'REACT / NEXT.JS', 'REACT NATIVE', 'NODE.JS / NESTJS', 'POSTGRESQL', 'VITEST / PLAYWRIGHT', 'DOCKER / COOLIFY', 'CI/CD'],
    languages: [
      {
        name: 'Français',
        level: {
          en: 'Native',
          fr: 'Langue maternelle',
        },
      },
      {
        name: 'English',
        level: {
          en: 'Professional',
          fr: 'Professionnel',
        },
      },
    ],
  },
  method: [
    {
      en: 'I write the rule, not the code.',
      fr: "J'écris la règle, pas le code.",
    },
    {
      en: 'Every feature ships with its test.',
      fr: 'Chaque fonctionnalité arrive avec son test.',
    },
    {
      en: 'One agent writes, another checks.',
      fr: 'Un agent écrit, un autre vérifie.',
    },
    {
      en: 'Dead ends are written down, so they stay closed.',
      fr: 'Les impasses sont consignées, pour ne pas les rouvrir.',
    },
    {
      en: "I remove what doesn't earn its place.",
      fr: 'Je retire ce qui ne sert pas.',
    },
  ],
  career: {
    text: {
      en: 'First website in 1999. Twelve years at La Provence, a regional daily, as digital project manager and then journalist. Back to building products in 2019, at INFORCA today.',
      fr: "Premier site web en 1999. Douze ans à La Provence, chef de projet numérique puis journaliste. De retour au produit en 2019, aujourd'hui chez INFORCA.",
    },
    origin: {
      en: '1h12 is the title of my graduation short film. I kept the domain.',
      fr: "1h12, c'est le titre de mon court-métrage de fin d'études. J'ai gardé le domaine.",
    },
  },
  resume: {
    experience: [
      {
        role: 'Product Engineer',
        company: 'INFORCA S.A.M',
        period: {
          en: 'Aug 2022 - Present',
          fr: 'Août 2022 - Présent',
        },
        location: 'Remote / Monaco',
        details: {
          en: [
            '<strong>Fashion PIM</strong>: a product information system for a B2B fashion client, over a million products. Two role-based apps, an API and an async worker. I wrote the codebase by hand from 2022; since late 2025 it has kept evolving without me writing a line, through agents I direct. Stack: Next.js, PostgreSQL, pg-boss, Docker, Coolify.',
            '<strong>AI photo studio</strong>: built on top of the PIM, it starts from the raw hanger shot and batch-produces the ghost mannequin, then the garment worn, front and back (Gemini).',
            '<strong>Also</strong>: a SaaS coaching platform for 300 coaches and coachees (Stripe subscriptions, automated PDFs) and a React Native mobile app for regularity rallies.',
          ],
          fr: [
            "<strong>PIM mode</strong> : système d'information produit pour un client B2B de la mode, plus d'un million de produits. Deux applications par rôle, une API et un worker asynchrone. J'ai écrit la base à la main à partir de 2022 ; depuis fin 2025, elle évolue sans que j'écrive une ligne, avec des agents que je dirige. Stack : Next.js, PostgreSQL, pg-boss, Docker, Coolify.",
            '<strong>Studio photo IA</strong> : construit sur le PIM, il part de la photo brute sur cintre et produit par lots le mannequin fantôme, puis le vêtement porté, de face et de dos (Gemini).',
            '<strong>Aussi</strong> : une plateforme SaaS de coaching pour 300 coachs et coachés (abonnements Stripe, PDF générés automatiquement) et une application mobile React Native pour des rallyes de régularité.',
          ],
        },
      },
      {
        role: {
          en: 'Front-end Developer',
          fr: 'Développeur Front-end',
        },
        company: 'Alltricks.com',
        period: {
          en: 'Jan 2022 - Aug 2022',
          fr: 'Janv 2022 - Août 2022',
        },
        location: 'Bouc-Bel-Air',
        summary: {
          en: "E-commerce features for France's leading outdoor sports site (React, Next.js, Redux Toolkit), and the migration of legacy modules to TypeScript.",
          fr: 'Fonctionnalités e-commerce pour le leader français du sport outdoor en ligne (React, Next.js, Redux Toolkit) et migration de modules legacy vers TypeScript.',
        },
      },
      {
        role: {
          en: 'Front-end Developer',
          fr: 'Développeur Front-end',
        },
        company: 'Internethic',
        period: {
          en: 'Apr 2020 - Dec 2021',
          fr: 'Avril 2020 - Déc 2021',
        },
        location: 'Marseille',
        summary: {
          en: 'A B2B SaaS application in Vue.js and Tailwind, with its own component library, documented in Storybook and covered by unit tests.',
          fr: 'Application SaaS B2B en Vue.js et Tailwind, avec sa bibliothèque de composants maison, documentée dans Storybook et couverte par des tests unitaires.',
        },
      },
      {
        role: {
          en: 'Front-end Web Developer',
          fr: 'Développeur Web Front-end',
        },
        company: 'High Testing R&D',
        period: {
          en: 'Apr 2019 - Mar 2020',
          fr: 'Avril 2019 - Mars 2020',
        },
        location: 'Marseille',
        summary: {
          en: 'Interactive map-based applications (OpenLayers, Vue.js), wireframes and prototypes in Figma, front-end integration on Django CMS and Symfony.',
          fr: 'Applications cartographiques interactives (OpenLayers, Vue.js), maquettes et prototypes sur Figma, intégration sur Django CMS et Symfony.',
        },
      },
      {
        role: {
          en: 'Digital Project Manager & Journalist',
          fr: 'Chef de projet numérique & Journaliste',
        },
        company: 'La Provence',
        period: {
          en: 'Jun 2007 - Mar 2019',
          fr: 'Juin 2007 - Mars 2019',
        },
        location: 'Marseille',
        details: {
          en: [
            '<strong>Journalist (2016-2019)</strong>: history, heritage and data journalism. Hosted a web series, created editorial formats (data, video), trained the newsroom in digital practices.',
            '<strong>Digital project manager (2010-2016)</strong>: web and mobile redesigns of LaProvence.com, election mapping apps. Specifications, UX/UI and SEO.',
            '<strong>Web developer (2007-2010)</strong>: front-end (CSS, PHP, JS) and interactive editorial modules.',
          ],
          fr: [
            "<strong>Journaliste (2016-2019)</strong> : histoire, patrimoine et data journalisme. Animation d'une websérie, création de formats éditoriaux (data, vidéo), formation de la rédaction au numérique.",
            '<strong>Chef de projet numérique (2010-2016)</strong> : refontes web et mobile de LaProvence.com, applications de cartographie électorale. Spécifications, UX/UI et SEO.',
            '<strong>Développeur web (2007-2010)</strong> : front-end (CSS, PHP, JS) et modules éditoriaux interactifs.',
          ],
        },
      },
      {
        role: {
          en: 'Web Developer (Freelance)',
          fr: 'Développeur Web (Freelance)',
        },
        company: {
          en: 'Self-employed',
          fr: 'Indépendant',
        },
        period: '2001 - 2007',
        location: 'Marseille',
        summary: {
          en: 'Custom websites, from UI integration to front-end design (HTML/CSS, JavaScript, PHP).',
          fr: "Sites web sur mesure, de l'intégration au design front-end (HTML/CSS, JavaScript, PHP).",
        },
      },
    ],
    education: [
      {
        degree: 'Master Communication : Concepteur Multimédia',
        school: {
          en: 'Avignon University',
          fr: "Université d'Avignon",
        },
        period: '1999 - 2001',
      },
    ],
    teaching: [
      {
        role: {
          en: 'Data Journalism Module Instructor',
          fr: 'Intervenant module Data Journalisme',
        },
        school: {
          en: 'Aix-Marseille University',
          fr: 'Aix-Marseille Université',
        },
        period: '2014 - 2018',
      },
      {
        role: {
          en: 'Journalism & Social Media Module Instructor',
          fr: 'Intervenant module Journalisme & Réseaux Sociaux',
        },
        school: {
          en: 'European Institute of Journalism (IEJ) Marseille',
          fr: 'Institut Européen de Journalisme (IEJ) Marseille',
        },
        period: '2013 - 2015',
      },
    ],
  },
  ui: {
    sections: {
      method: {
        en: 'Method',
        fr: 'Méthode',
      },
      career: {
        en: 'Background',
        fr: 'Parcours',
      },
    },
    work: {
      live: {
        en: 'Live',
        fr: 'En ligne',
      },
      soon: {
        en: 'Launching soon',
        fr: 'Bientôt en ligne',
      },
      bench: {
        en: 'Test bench',
        fr: "Banc d'essai",
      },
      idea: {
        en: 'The starting idea',
        fr: "L'idée de départ",
      },
      iterations: {
        en: 'The iterations',
        fr: 'Les itérations',
      },
      read: {
        en: 'Read the project',
        fr: 'Lire le projet',
      },
      all: {
        en: 'All projects',
        fr: 'Tous les projets',
      },
      next: {
        en: 'Next project',
        fr: 'Projet suivant',
      },
    },
    resume: {
      about: {
        en: 'About',
        fr: 'À propos',
      },
      experience: {
        en: 'Experience',
        fr: 'Expérience',
      },
      skills: {
        en: 'Skills',
        fr: 'Compétences',
      },
      projects: {
        en: 'Side projects',
        fr: 'Projets personnels',
      },
      projectsIntro: {
        en: 'Made on the side, without writing the code. Each one was a test bench for the models of its day; the story behind each is on 1h12.com.',
        fr: "Faits à côté, sans écrire le code. Chacun a servi de banc d'essai aux modèles du moment ; le récit de chaque projet est sur 1h12.com.",
      },
      teaching: {
        en: 'Teaching',
        fr: 'Enseignement',
      },
      education: {
        en: 'Education',
        fr: 'Formation',
      },
      languages: {
        en: 'Languages',
        fr: 'Langues',
      },
    },
    skillLabels: {
      product: {
        en: 'Product & design',
        fr: 'Produit & design',
      },
      ai: {
        en: 'Agents & AI',
        fr: 'Agents & IA',
      },
      tech: 'Tech',
    },
    nav: {
      back: {
        en: 'Back',
        fr: 'Retour',
      },
      print: {
        en: 'Print / Save as PDF',
        fr: 'Imprimer / PDF',
      },
      resume: {
        en: 'RESUME',
        fr: 'CV',
      },
      fullResume: {
        en: 'Full resume',
        fr: 'CV complet',
      },
    },
    meta: {
      home: {
        title: 'Nicolas Bocquet - Product Engineer',
        description: {
          en: 'Nicolas Bocquet, product engineer in Marseille. This is what I make on the side: games and apps, none hand-coded, each one a test bench for the AI models of its day.',
          fr: "Nicolas Bocquet, product engineer à Marseille. Ici, ce que je fabrique à côté : des jeux et des apps, aucun codé à la main, chacun a servi de banc d'essai aux modèles d'IA du moment.",
        },
      },
      resume: {
        title: {
          en: 'Nicolas Bocquet - Resume',
          fr: 'Nicolas Bocquet - CV',
        },
        description: {
          en: 'Resume of Nicolas Bocquet, product engineer in Marseille. On the web since 1999; since late 2025 I direct the agents that write the code and answer for what ships.',
          fr: 'CV de Nicolas Bocquet, product engineer à Marseille. Dans le web depuis 1999 ; depuis fin 2025, je dirige les agents qui écrivent le code et je réponds de ce qui part en production.',
        },
      },
    },
  },
}
