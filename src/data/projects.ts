export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'management' | 'modern-web' | 'archive';
  year: string;
  status: 'Active' | 'Production' | 'Open Source' | 'Hackathon / Prototype' | 'Completed';
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  docsUrl?: string;
  communityUrl?: string;
  starHighlight?: string;
  screenshots?: string[];
  executiveTakeaway?: string;
  architectureHighlights?: string[];
  problemSolved?: string;
}

export const featuredProjects: ProjectItem[] = [
  {
    id: 'encrypted1on1',
    title: 'Encrypted 1-on-1',
    subtitle: 'Self-hosted, E2EE platform for manager & employee 1:1 meetings',
    description: 'A dedicated platform engineered to foster psychological safety in leadership conversations. Employs client-side zero-trust encryption so that meeting agendas, feedback, and career notes are strictly readable only by the two participants.',
    category: 'management',
    year: '2026',
    status: 'Open Source',
    technologies: ['PHP', 'FrankenPHP', 'Svelte', 'TypeScript', 'Docker', 'WebCrypto API', 'E2EE AES-GCM', 'Argon2id'],
    githubUrl: 'https://github.com/aleksejs1/encrypted1on1',
    liveUrl: 'https://private1on1.eu/',
    starHighlight: 'People Leadership Tech',
    screenshots: [
      'https://raw.githubusercontent.com/aleksejs1/encrypted1on1/main/docs/screenshots/anketa.png',
      'https://raw.githubusercontent.com/aleksejs1/encrypted1on1/main/docs/screenshots/anketa_list.png',
      'https://raw.githubusercontent.com/aleksejs1/encrypted1on1/main/docs/screenshots/report.png',
      'https://raw.githubusercontent.com/aleksejs1/encrypted1on1/main/docs/screenshots/login.png'
    ],
    executiveTakeaway: 'Proves how deep engineering literacy directly serves people management. Instead of relying on insecure Google Docs or corporate surveillance tools for sensitive 1:1 discussions, I designed a verifiable, zero-trust system giving employees 100% confidence in privacy.',
    problemSolved: 'Sensitive 1-on-1 feedback and personal career struggles often go unrecorded because employees fear cloud leaks or HR oversight. Encrypted 1-on-1 guarantees cryptographic privacy while preserving structured action items and growth tracking.',
    architectureHighlights: [
      'Client-side zero-knowledge encryption using standard WebCrypto API (AES-GCM & PBKDF2/Argon2id)',
      'Server (FrankenPHP) stores solely encrypted ciphertext with zero access to private keys or cleartext',
      'Dual-actor synchronized state machine for mutual agenda preparation and action checkpoint approvals',
      'Self-hostable via one-line Docker Compose setup with zero external vendor telemetry'
    ]
  },
  {
    id: 'ari',
    title: 'Ari CRM',
    subtitle: 'The Personal CRM for connections that matter',
    description: 'A self-hosted personal relationship management platform centered around immutable data history and dependable cross-platform notifications. Built to maintain meaningful professional relationships and long-term team mentorship networks.',
    category: 'management',
    year: '2025',
    status: 'Open Source',
    technologies: ['PHP 8.5', 'Symfony 7.4', 'React', 'TypeScript', 'TanStack Query', 'Docker', 'OpenAPI', 'MariaDB/SQLite'],
    githubUrl: 'https://github.com/aleksejs1/ari',
    liveUrl: 'https://personal-ari.com/',
    docsUrl: 'https://docs.personal-ari.com/docs/getting-started/installation',
    starHighlight: 'Stakeholder & Team CRM',
    screenshots: [
      'https://personal-ari.com/assets/ari_dashboard_4.png',
      'https://personal-ari.com/assets/ari_contact_4.png',
      'https://personal-ari.com/assets/ari_filtering_search_4.png',
      'https://personal-ari.com/assets/ari_history_4.png'
    ],
    executiveTakeaway: 'Demonstrates architectural maturity and clean enterprise domain modeling. Built with an OpenAPI-first contract, immutable audit logging, and a plugin-oriented architecture that allows modular extension without core codebase bloat.',
    problemSolved: 'Commercial CRMs are bloated and harvest personal data. Ari provides a local-first, self-hosted, tamper-proof audit log of personal contacts and career interactions with first-class Telegram notification triggers.',
    architectureHighlights: [
      'Comprehensive technical documentation portal covering setup, architecture, and Docker deployments',
      'Immutable audit trail via Doctrine lifecycle subscribers — data history is never silently lost or overwritten',
      'Plugin-Oriented Architecture (POA) enabling frontend and backend extensions through decoupled SDKs',
      'Decoupled contract with OpenAPI-first API Platform and generated typed TypeScript clients',
      'Automated background queues for scheduled Telegram and calendar reminder delivery'
    ]
  },
  {
    id: 'obsidian-contact-sync',
    title: 'Obsidian Contact Sync',
    subtitle: 'Google Contacts synchronization plugin for Obsidian PKM',
    description: 'A native TypeScript plugin for Obsidian that automatically synchronizes Google Contacts into local Markdown notes. Seamlessly binds personal knowledge management (PKM) with real-world stakeholder mapping.',
    category: 'management',
    year: '2025',
    status: 'Open Source',
    technologies: ['TypeScript', 'Obsidian Plugin API', 'Google People API', 'OAuth 2.0', 'Local-First PKM'],
    githubUrl: 'https://github.com/aleksejs1/obsidian-contact-sync-plugin',
    communityUrl: 'https://community.obsidian.md/plugins/google-contacts',
    screenshots: [
      'https://raw.githubusercontent.com/aleksejs1/obsidian-contact-sync-plugin/master/resources/obsidian_contact_sync_plugin_note.png',
      'https://raw.githubusercontent.com/aleksejs1/obsidian-contact-sync-plugin/master/resources/obsidian_contact_sync_plugin_settings.png'
    ],
    executiveTakeaway: 'Reflects personal commitment to systematic knowledge management and developer ergonomics. Implements strict non-destructive two-way synchronization algorithms, respecting user-edited frontmatter.',
    problemSolved: 'Engineering leaders manage relationships across hundreds of colleagues, clients, and partners. This plugin turns static address books into living, linked Markdown notes inside Obsidian without sacrificing data privacy.',
    architectureHighlights: [
      'Approved and featured in the official Obsidian Community Plugin Directory',
      'Non-destructive YAML frontmatter reconciliation preserving custom user fields and body content',
      'Direct integration with Google People API via granular OAuth 2.0 desktop authentication flow',
      'Auditing engine detecting orphaned local notes and synchronization discrepancies',
      'Pluggable naming strategies including full vCard (VCF) schema compatibility'
    ]
  },
  {
    id: 'minimalist',
    title: 'minimalist.lv',
    subtitle: 'Multilingual static platform & no-bloat digital knowledge base',
    description: 'Independent multilingual (EN, RU, LV) static portal dedicated to digital minimalism, ethical software, and lean engineering. Built with Astro 5 and zero client JavaScript by default.',
    category: 'modern-web',
    year: '2026',
    status: 'Production',
    technologies: ['Astro 5', 'TypeScript', 'Tailwind CSS', 'Pagefind', 'i18n Routing', 'Zero-JS Architecture'],
    githubUrl: 'https://github.com/aleksejs1/minimalist',
    liveUrl: 'https://minimalist.lv',
    starHighlight: '100/100 Lighthouse • Zero-JS',
    executiveTakeaway: 'Concrete proof of mastery in modern frontend architectures. Demonstrates how to deliver blazing-fast web experiences (100/100 Lighthouse scores across all metrics) without client-side framework bloat or privacy compromises.',
    problemSolved: 'Modern web platforms are overloaded with telemetry, mega-byte client bundles, and tracking scripts. minimalist.lv proves that high aesthetic standards and rich content can be delivered with pure HTML/CSS and build-time static indexing.',
    architectureHighlights: [
      '100% static compilation with zero runtime JavaScript required for reading and navigation',
      'Multilingual i18n routing with strict Zod content schema validations',
      'Build-time local search powered by Pagefind without external SaaS dependencies',
      'Zero trackers, zero cookies, zero third-party font blocking'
    ]
  },
  {
    id: '4m-lv',
    title: 'Sašiņas skaitļu konvertors (4m.lv)',
    subtitle: '#1 Google ranking in Latvia for "skaitļi ar vārdiem"',
    description: 'The go-to financial utility for Latvian accountants and businesses. Converts currency figures and numbers into formal Latvian verbal text for legal contracts, acts, and invoices, augmented with ECB live rates.',
    category: 'modern-web',
    year: '2019–Present',
    status: 'Production',
    technologies: ['JavaScript', 'REST APIs', 'European Central Bank (ECB) API', 'SEO Engineering'],
    githubUrl: 'https://github.com/aleksejs1/numtowords',
    liveUrl: 'https://4m.lv',
    starHighlight: '#1 in Latvian Google',
    screenshots: [
      'https://kovalovs.lv/storage/2025_01_11/1736566113_5166/original.png',
      'https://kovalovs.lv/storage/2025_01_11/1736566133_9121/original.png',
      'https://kovalovs.lv/storage/2025_01_11/1736566140_7557/original.png',
      'https://kovalovs.lv/storage/2025_01_11/1736566153_3892/original.png'
    ],
    executiveTakeaway: 'Shows practical understanding of SEO, domain product-market fit, and solving unglamorous but mission-critical everyday business problems that organically retain #1 search rankings for years.',
    problemSolved: 'Invoices in Latvia legally require number amounts to be written out verbally with complex grammatical declensions and currency units. 4m.lv automates this accurately for thousands of daily professionals.',
    architectureHighlights: [
      'Sophisticated linguistic declension engine handling Latvian numerical grammar and currencies',
      'Automated sync with European Central Bank (ECB) daily currency exchange fixings',
      'Official working day and public holiday calendar for Latvian payroll and accountants',
      'Zero downtime architecture running reliably with minimal maintenance overhead'
    ]
  },
  {
    id: 'zardi-erp',
    title: 'Zardi.lv Community ERP',
    subtitle: 'End-to-end association management & billing automation system',
    description: 'Bespoke ERP and financial automation system built to manage non-profit property operations: automated SEPA bank statement reconciliation, mass SMS/email broadcasts, electricity sub-metering, and PDF invoice generation.',
    category: 'modern-web',
    year: '2020–2024',
    status: 'Completed',
    technologies: ['Symfony', 'PHP', 'SEPA Banking XML', 'SMS Gateway', 'PDF Generation', 'MySQL'],
    screenshots: [
      'https://kovalovs.lv/storage/2020_12_10/1607617464_2061/original.png',
      'https://kovalovs.lv/storage/2020_12_10/1607617471_0602/original.png'
    ],
    executiveTakeaway: 'A demonstration of pragmatic engineering applied to real-world community leadership. Rather than buying an ill-fitting commercial solution, I engineered a tailored system that eliminated manual administrative toil and digitized 100% of accounting.',
    problemSolved: 'Manual spreadsheet accounting for property cooperatives creates errors, delayed payments, and high administrative cost. This ERP handles end-to-end billing, bank reconciliation, and automated tenant alerts.',
    architectureHighlights: [
      'Automated ISO 20022 SEPA bank statement parsing and payment reconciliation',
      'Dynamic PDF invoice generation with scheduled email and SMS dispatch',
      'Electricity sub-meter telemetry tracking with tiered tariff calculation',
      'Member portal for real-time balance review and payment verification'
    ]
  },
  {
    id: 'yolo-lv',
    title: 'yolo.lv',
    subtitle: '1M+ indexed multilingual movie pages on 1 Core & 1 GB RAM',
    description: 'High-scale movie catalog and discovery platform housing 76,000+ films and 385,000+ actors. Every entity is localized across 3 languages, creating over 1,000,000 SEO-indexed pages. Built for extreme resource efficiency, running the entire application and database on an ultra-budget VPS (1 vCPU, 1 GB RAM) under continuous search-bot scraping and up to 3,000+ monthly unique visitors.',
    category: 'modern-web',
    year: '2018–Present',
    status: 'Production',
    technologies: ['Symfony', 'MySQL Query Tuning', 'Aggressive Caching', 'i18n (3 Languages)', 'Queue Workers', 'SEO Engineering'],
    liveUrl: 'https://yolo.lv',
    starHighlight: '1M+ Pages • 1 Core & 1 GB RAM',
    screenshots: [
      'https://kovalovs.lv/storage/2018_09_30/1538316570_9752/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538316576_8484/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538316582_7972/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538316592_3216/original.png'
    ],
    executiveTakeaway: 'A masterclass in cost optimization and high-efficiency systems tuning: proves how intelligent index design, lean schema modeling, and aggressive caching can serve a 1M+ page multilingual dataset with sub-second response times on minimal hardware (1 vCPU, 1 GB RAM) without ballooning cloud infrastructure bills.',
    problemSolved: 'Aggregating and serving massive relational datasets (76k movies, 385k actors) across 3 localized languages without enterprise cloud budgets, withstanding relentless search crawler bot activity at multi-requests-per-second without memory exhaustion.',
    architectureHighlights: [
      'High-density relational database schema optimized for 76,000+ movies and 385,000+ actors across 3 languages',
      'Over 1,000,000 multilingual pages indexed by search engines with high SEO authority',
      'Extreme memory optimization: entire PHP backend and MySQL database run seamlessly on a 1 vCPU, 1 GB RAM VPS',
      'Withstood non-stop crawler bot traffic and up to 3,000+ monthly unique visitors with sub-second latency',
      'Multi-source ingestion pipeline aggregating TMDB, OMDB, and Wikipedia metadata'
    ]
  }
];

export const archiveProjects: ProjectItem[] = [
  {
    id: 'writer2l',
    title: 'Writer2l',
    subtitle: 'Distraction-free novel and chapter word processor',
    description: 'Word processor that breaks novels into chapters and scenes, helping authors track progress without intrusive AI.',
    category: 'archive',
    year: '2020',
    status: 'Open Source',
    technologies: ['Symfony 5.2', 'Webpack Encore', 'PHP'],
    githubUrl: 'https://github.com/aleksejs1/writer2l',
    screenshots: [
      'https://kovalovs.lv/storage/2020_12_10/1607615677_75/original.png',
      'https://kovalovs.lv/storage/2020_12_10/1607615685_4128/original.png',
      'https://kovalovs.lv/storage/2020_12_10/1607615691_7363/original.png',
      'https://kovalovs.lv/storage/2020_12_10/1607615698_0957/original.png'
    ]
  },
  {
    id: 'fuffy-eu',
    title: 'Fuffy.eu',
    subtitle: 'Open Banking smart savings platform (PSD2)',
    description: 'Hackathon-born fintech prototype calculating personal monthly savings targets using PSD2 Open Banking data.',
    category: 'archive',
    year: '2017',
    status: 'Hackathon / Prototype',
    technologies: ['Symfony', 'React', 'SPA / PWA', 'PSD2 Open Banking'],
    screenshots: [
      'https://kovalovs.lv/storage/2018_09_30/1538315304_4288/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538315309_342/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538315314_6546/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538315319_9397/original.png'
    ]
  },
  {
    id: 'piratsky-gruz',
    title: 'Piratsky Gruz',
    subtitle: 'Peer-to-peer crowdsourced package delivery platform',
    description: 'Hackathon project modeling an on-demand courier network for peer-to-peer intra-city package transfers.',
    category: 'archive',
    year: '2017',
    status: 'Hackathon / Prototype',
    technologies: ['Symfony', 'JWT', 'REST API', 'Bootstrap', 'JavaScript'],
    screenshots: [
      'https://kovalovs.lv/storage/2018_09_30/1538313535_3599/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538313540_5892/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538313544_7946/original.png'
    ]
  },
  {
    id: 'bucket-lv',
    title: 'Bucket.lv',
    subtitle: 'Crowdfunded mutual aid pet insurance platform',
    description: 'StartupSlalom hackathon product connecting pet owners into mutual aid crowdfunding pools for medical treatments.',
    category: 'archive',
    year: '2016',
    status: 'Hackathon / Prototype',
    technologies: ['JavaScript', 'Bootstrap', 'Team Git', 'JsRender'],
    screenshots: [
      'https://kovalovs.lv/storage/2018_09_30/1538312781_9421/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538312787_0019/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538312792_2893/original.png'
    ]
  },
  {
    id: 'sdati',
    title: 'sDati',
    subtitle: 'Utility water meter telemetry and automated reporting service',
    description: 'Specialized SaaS for residents to submit water counter telemetry directly to property housekeepers.',
    category: 'archive',
    year: '2015–2016',
    status: 'Completed',
    technologies: ['PHP', 'MySQL', 'REST', 'AJAX', 'JsRender'],
    screenshots: [
      'https://kovalovs.lv/storage/2018_09_30/1538312582_9578/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538312588_9679/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538312601_2685/original.png'
    ]
  },
  {
    id: 'stuff-manager',
    title: 'Stuff Manager',
    subtitle: 'Asset inventory and residual value tracking tool',
    description: 'Web utility for tracking personal belongings, equipment depreciation, and residual value calculations.',
    category: 'archive',
    year: '2016',
    status: 'Completed',
    technologies: ['PHP', 'MySQL', 'REST', 'JavaScript'],
    screenshots: [
      'https://kovalovs.lv/storage/2018_09_30/1538312436_0557/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538312441_9585/original.png'
    ]
  },
  {
    id: 'traffic-engineer',
    title: 'Traffic Engineer System',
    subtitle: 'GIS road sign inventory and regional compliance tool',
    description: 'Enterprise GIS tool allowing engineers to catalog, map, and print formatted road sign specifications from mobile devices.',
    category: 'archive',
    year: '2015',
    status: 'Completed',
    technologies: ['PHP', 'MySQL', 'Maps API', 'Mobile Web'],
    screenshots: [
      'https://kovalovs.lv/storage/2018_09_30/1538312231_4402/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538312239_0447/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538312245_1312/original.png'
    ]
  },
  {
    id: 'tasteit',
    title: 'TasteIt Mobile App',
    subtitle: 'Local restaurant food ordering and delivery marketplace',
    description: 'Food delivery platform consisting of mobile customer app, partner web portal, and backend order routing.',
    category: 'archive',
    year: '2012–2014',
    status: 'Completed',
    technologies: ['Java', 'PHP', 'REST API', 'MySQL'],
    screenshots: [
      'https://kovalovs.lv/storage/2018_09_30/1538312037_7835/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538312046_0134/original.png'
    ]
  },
  {
    id: 'tsi-schedule',
    title: 'TSI Mobile Schedule',
    subtitle: 'Official student timetable application for TSI University',
    description: 'Early cross-platform mobile timetable for TSI students fetching real-time schedule feeds over JSONP REST endpoints.',
    category: 'archive',
    year: '2012',
    status: 'Completed',
    technologies: ['PhoneGap', 'JavaScript', 'JSONP', 'REST'],
    screenshots: [
      'https://kovalovs.lv/storage/2018_09_30/1538311536_6479/original.png'
    ]
  },
  {
    id: 'weekend-baltic',
    title: 'Weekend Baltic Unofficial App',
    subtitle: 'Offline festival map, timetable and navigation guide',
    description: 'High-utility offline festival companion with cached schedules, offline venue map, and stage alerts.',
    category: 'archive',
    year: '2016–2018',
    status: 'Completed',
    technologies: ['PhoneGap', 'JavaScript', 'Offline Caching'],
    githubUrl: 'https://github.com/aleksejs1/weekend',
    screenshots: [
      'https://kovalovs.lv/storage/2018_09_30/1538316898_5384/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538316903_8578/original.png'
    ]
  },
  {
    id: 'productivity-fuffy',
    title: 'Productivity by Fuffy',
    subtitle: 'Printable productivity matrix & journal template generator',
    description: 'Lightweight web utility to generate high-resolution, localized PDF planning sheets and habit trackers.',
    category: 'archive',
    year: '2018',
    status: 'Completed',
    technologies: ['PHP', 'PDF Generation', 'i18n'],
    liveUrl: 'https://p.4m.lv/',
    screenshots: [
      'https://kovalovs.lv/storage/2018_09_30/1538316007_1596/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538316012_3769/original.png'
    ]
  },
  {
    id: 'no-lawyers',
    title: 'No Lawyers',
    subtitle: 'Automated legal contract drafting and digital signature platform',
    description: 'Hackathon MVP enabling users to assemble legally valid agreements in 3 steps with instant PDF export and signing.',
    category: 'archive',
    year: '2017',
    status: 'Hackathon / Prototype',
    technologies: ['Symfony 3', 'PDF Engine', 'Digital Signatures'],
    screenshots: [
      'https://kovalovs.lv/storage/2018_09_30/1538315707_158/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538315711_9724/original.png'
    ]
  },
  {
    id: 'genetic-algo',
    title: 'Genetic Algorithm Image Solver',
    subtitle: 'Evolutionary algorithm implementation for image reconstruction',
    description: 'Computer science exploration demonstrating genetic crossover, mutation, and fitness functions to approximate target images.',
    category: 'archive',
    year: '2015',
    status: 'Completed',
    technologies: ['JavaScript', 'Canvas API', 'Algorithmic Optimization'],
    screenshots: [
      'https://kovalovs.lv/storage/2018_09_30/1538311785_4978/original.png'
    ]
  },
  {
    id: 'robosim',
    title: 'RoboSim',
    subtitle: 'Autonomous infrared robot sensor simulation in virtual maze',
    description: 'Virtual simulator predicting ultrasonic and infrared detector telemetry before physical robotics hardware manufacturing.',
    category: 'archive',
    year: '2013',
    status: 'Completed',
    technologies: ['JavaScript', 'Simulation Engine', 'Hardware Emulation'],
    screenshots: [
      'https://kovalovs.lv/storage/2018_09_30/1538311657_3803/original.png'
    ]
  },
  {
    id: 'auction-platform',
    title: 'Real-Time Online Auction',
    subtitle: 'Peer-to-peer bidding and listing platform',
    description: 'Full-featured web auction system with live bidding countdowns, user authentication, and transaction logging.',
    category: 'archive',
    year: '2013',
    status: 'Completed',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    screenshots: [
      'https://kovalovs.lv/storage/2018_09_30/1538311223_6623/original.png',
      'https://kovalovs.lv/storage/2018_09_30/1538311234_8363/original.png'
    ]
  }
];

export const allProjects: ProjectItem[] = [...featuredProjects, ...archiveProjects];
