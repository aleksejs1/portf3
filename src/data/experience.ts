export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  isLeadership: boolean;
  category: 'leadership' | 'engineering' | 'civic';
  summary: string;
  highlights: string[];
  skills: string[];
}

// Dynamic milestones calculation — automatically updates every year without manual edits
const CURRENT_YEAR = new Date().getFullYear();
export const TECH_START_YEAR = 2008; // 17+ years in 2025, 18+ in 2026, continues dynamically
export const LEADERSHIP_START_YEAR = 2022; // 4+ years in 2026, continues dynamically

export const yearsInTech = `${CURRENT_YEAR - TECH_START_YEAR}+`;
export const yearsInLeadership = `${CURRENT_YEAR - LEADERSHIP_START_YEAR}+`;

export const experiences: ExperienceItem[] = [
  {
    period: '03.2025 — Present',
    role: 'Engineering Manager',
    company: 'Mapon',
    companyUrl: 'https://www.mapon.com',
    location: 'Riga, Latvia',
    isLeadership: true,
    category: 'leadership',
    summary: 'Leading engineering teams in high-scale IoT and fleet telematics. Championing people growth, delivery excellence, and pragmatic technical architecture aligned with company business objectives.',
    highlights: [
      'Empower and mentor software engineers through transparent 1-on-1s, structured career paths, and tailored growth plans.',
      'Refine engineering rituals and delivery cadence, reducing cycle time while raising code quality and reliability.',
      'Bridge business strategy with engineering execution, partnering with Product and Executive stakeholders on roadmaps.',
      'Foster a culture of ownership, psychological safety, and continuous improvement across the engineering group.'
    ],
    skills: ['People Leadership', 'Engineering Management', 'Delivery & Agile', 'IoT & Telematics', 'Talent Growth', 'Tech Strategy']
  },
  {
    period: '01.2022 — 03.2025',
    role: 'Technical Project Manager',
    company: 'inbox.lv',
    companyUrl: 'https://www.inbox.lv',
    location: 'Riga, Latvia',
    isLeadership: true,
    category: 'leadership',
    summary: 'Transitioned from hands-on backend developer to technical project leadership for the largest national web portal and mail service in the Baltics, serving millions of daily active users.',
    highlights: [
      'Led cross-functional teams of backend developers, frontend engineers, sysadmins, and QA on mission-critical projects.',
      'Spearheaded architectural migrations and infrastructure upgrades, maintaining 99.9%+ availability under heavy load.',
      'Leveraged 10+ years of technical background to communicate with engineers at the lowest code level while presenting clear business value to executives.',
      'Instituted collaborative planning, risk management, and streamlined incident post-mortems.'
    ],
    skills: ['Technical Leadership', 'Cross-Functional Management', 'High-Load Systems', 'Project Delivery', 'Architecture Facilitation']
  },
  {
    period: '11.2021 — 01.2022',
    role: 'PHP Developer',
    company: 'lampa.lv',
    companyUrl: 'https://lampa.lv',
    location: 'Riga, Latvia',
    isLeadership: false,
    category: 'engineering',
    summary: 'Backend engineering focused on API integrations, business data pipelines, and core web platform features.',
    highlights: [
      'Engineered scalable backend endpoints and integrated external enterprise web services.',
      'Enhanced database performance, schema design, and asynchronous task processing.'
    ],
    skills: ['PHP', 'REST APIs', 'MySQL', 'Backend Architecture']
  },
  {
    period: '11.2016 — 11.2021',
    role: 'PHP Developer (High-Load Systems)',
    company: 'inbox.lv',
    companyUrl: 'https://www.inbox.lv',
    location: 'Riga, Latvia',
    isLeadership: false,
    category: 'engineering',
    summary: 'Spent 5 years building and hardening the core distributed backend powering high-throughput email processing, cloud storage, and user identity platforms.',
    highlights: [
      'Developed and optimized core mail engine services handling millions of messages daily with tight SLAs.',
      'Implemented distributed caching, queuing systems, and resilient failover mechanisms.',
      'Collaborated closely with system administrators to tune Linux server performance and combat spam & security threats.',
      'Participated in code reviews, technical specifications, and mentored junior engineers.'
    ],
    skills: ['PHP', 'High-Load Systems', 'Distributed Architecture', 'MySQL', 'Redis', 'Mail Protocols', 'Linux']
  },
  {
    period: '04.2011 — 11.2016',
    role: 'Functional Analyst — Core Banking Team',
    company: 'DNB Bank',
    companyUrl: 'https://www.luminor.lv',
    location: 'Riga, Latvia',
    isLeadership: false,
    category: 'engineering',
    summary: '5.5 years in mission-critical financial core banking. Gained rigorous domain expertise in transaction processing, financial ledgers, regulatory compliance, and bulletproof system reliability.',
    highlights: [
      'Analyzed, modeled, and tested core transactional workflows, payment systems, and interbank messaging protocols.',
      'Formulated functional specifications for bank software modernization and mission-critical payment gateways.',
      'Developed deep precision around data consistency, audit trails, and zero-error tolerances.'
    ],
    skills: ['Core Banking', 'System Analysis', 'Payment Systems', 'Financial Architecture', 'Requirements Engineering']
  }
];

export interface CivicItem {
  period: string;
  role: string;
  organization: string;
  type: string;
  summary: string;
  highlights: string[];
}

export const civicActivities: CivicItem[] = [
  {
    period: '09.2020 — 05.2026',
    role: 'Board Member (Valdes loceklis)',
    organization: 'Biedrība "Zārdi"',
    type: 'Civic & Community Engagement',
    summary: 'Elected non-profit board leadership for a property association. Combined community governance with custom software engineering to digitize operations.',
    highlights: [
      'Executive governance scale: Budget oversight, vendor management, legal and financial compliance for property infrastructure assets.',
      'Organized and moderated general membership assemblies, successfully implementing remote voting during COVID-19 restrictions.',
      'Conducted competitive procurement tenders for property maintenance and facility infrastructure repairs.',
      'Handled liaisons with municipal and state institutions, ensuring full legal, tax, and regulatory compliance.',
      'Conceived and engineered from scratch a comprehensive ERP web application (zardi.lv) automating billing, SEPA bank statement imports, electricity metering, and mass SMS/email notifications.'
    ]
  }
];
