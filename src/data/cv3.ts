import type { CvData } from './cv';
export { calculateTenure } from './cv';

export const cv3Data: CvData = {
  personal: {
    name: 'Aleksejs Kovaļovs',
    title: 'Director of AI Development Candidate · 15+ Years Tech & Leadership Experience',
    subtitle: 'Riga, Latvia · Born in 1990 (Age 36)',
    contacts: {
      email: 'aleks4444@inbox.lv',
      phone: '+371 26185369',
      linkedin: 'linkedin.com/in/kovalovs-lv',
      linkedinUrl: 'https://www.linkedin.com/in/kovalovs-lv',
      portfolio: 'kovalovs.lv',
      portfolioUrl: 'https://kovalovs.lv'
    }
  },
  education: [
    {
      period: '2013-2015',
      institution: 'Institute of Transport and Telecommunications',
      degree: 'Master’s degree in Information Systems'
    },
    {
      period: '2009-2013',
      institution: 'Institute of Transport and Telecommunications',
      degree: 'Bachelor’s degree in Electrical Engineering (ML Foundations in 2010)'
    },
    {
      period: '2011',
      institution: 'Institute of Transport and Telecommunications',
      degree: 'IT Project Management qualification course'
    }
  ],
  experience: [
    {
      id: 'mapon',
      startYear: 2025,
      startMonth: 3,
      isCurrent: true,
      company: 'AS Mapon',
      role: 'Engineering Manager'
    },
    {
      id: 'inbox-pm',
      startYear: 2022,
      startMonth: 1,
      endYear: 2025,
      endMonth: 3,
      periodText: 'Jan. 2022 – Mar. 2025 (3 years 2 months)',
      company: 'SIA Inbokss (inbox.lv)',
      role: 'Technical Project Manager / Tech Lead'
    },
    {
      id: 'zardi',
      startYear: 2020,
      startMonth: 9,
      endYear: 2026,
      endMonth: 5,
      periodText: 'Sep. 2020 – May 2026 (5 years 8 months)',
      company: 'Biedrība Zārdi',
      role: 'Member of the Board (Civic Leadership / Non-Profit)'
    },
    {
      id: 'inbox-php',
      startYear: 2016,
      startMonth: 11,
      endYear: 2021,
      endMonth: 11,
      periodText: 'Nov. 2016 – Nov. 2021 (5 years)',
      company: 'SIA Inbokss (inbox.lv)',
      role: 'PHP Developer / High-Load Distributed Systems'
    },
    {
      id: 'dnb',
      startYear: 2011,
      startMonth: 4,
      endYear: 2016,
      endMonth: 11,
      periodText: 'Apr. 2011 – Nov. 2016 (5 years 8 months)',
      company: 'AS DNB Banka',
      role: 'Functional Analyst / Core Banking Team'
    }
  ],
  qualities: [
    [
      'Early ML & Bot Defense (2010–2022): ML academic foundation (2010); led production neural net training in late 2022 detecting bot registrations & fraud before the LLM boom',
      'Data Sovereignty & On-Premise LLMs: Procured dedicated on-prem hardware for inbox.lv spam filtering & RAG support bots to process sensitive communications without cloud leakage',
      'Legacy Systems Navigation via AI: Operating within org-wide AI adoption at Mapon; leveraged agentic workflows to master a massive legacy codebase, personally resolving memory leaks and log anomalies without IDE overhead'
    ],
    [
      'Full-Lifecycle 10x SDLC Automation: Rebuilt team SDLC with ~90% AI automation from refinement and Jira reporting to implementation, automated testing, and deployment plans',
      'The Meta-Context Reality: Pragmatic recognition that AI cannot replace humans: critical undocumented enterprise context makes human judgment the essential lever for 10x delivery',
      'Cognitive Load & Burnout Prevention: Battle-tested insight that 10x velocity induces acute mental fatigue; sustainable AI scaling requires psychological safety, pacing, and vigilance'
    ]
  ],
  responsibilities: [
    {
      title: 'AI Strategy, Pragmatic ROI & Business Value',
      bullets: [
        {
          lead: 'Filter hype from production ROI',
          text: 'validating AI business cases with empirical data; prioritizing initiatives that deliver measurable cost reduction and operational velocity'
        },
        {
          lead: 'Align AI with business goals',
          text: 'identifying high-impact use cases across customer self-service, internal workflows, and operational efficiency without chasing empty trends'
        },
        {
          lead: 'Disciplined Build vs Buy analysis',
          text: 'evaluating whether to procure dedicated on-premise compute, utilize commercial foundation model APIs, or build custom internal pipelines'
        }
      ]
    },
    {
      title: 'People Leadership, 10x SDLC & Culture',
      bullets: [
        {
          lead: 'Automate 90% of development SDLC',
          text: 'orchestrating AI agents across task creation, refinement, code implementation, automated testing, Jira reporting, and deployment'
        },
        {
          lead: 'Lead 18+ engineer departments',
          text: 'fostering high psychological safety, transparent career progression, and collective accountability across multi-disciplinary technical streams'
        },
        {
          lead: 'Guard against cognitive burnout',
          text: 'actively monitoring developer mental fatigue and pacing sprints to prevent cognitive exhaustion under intense 10x delivery velocity'
        }
      ]
    },
    {
      title: 'Legacy Codebases & Deep Problem Solving',
      bullets: [
        {
          lead: 'Navigate complex legacy monoliths',
          text: 'embracing org-wide AI harness adoption within my engineering team, mastering a massive legacy codebase to accelerate fixes and eliminate knowledge silos'
        },
        {
          lead: 'Hands-on root cause investigation',
          text: 'personally diagnosing complex memory leaks, concurrency bottlenecks, and distributed log anomalies leveraging agentic analysis'
        },
        {
          lead: 'Unblock cross-team requests',
          text: 'accelerating ad-hoc support escalations and neighboring team requests directly in production code without relying on traditional IDEs'
        }
      ]
    },
    {
      title: 'Applied GenAI, Agentic Harnesses & Proofs',
      bullets: [
        {
          lead: 'Engineer agentic workflows',
          text: 'architecting custom agent harnesses and Model Context Protocol (MCP) integrations to automate complex multi-step technical operations'
        },
        {
          lead: 'Demystify model boundaries',
          text: 'navigating LLM reasoning limits, context constraints, and token economics to match the right model to each specific domain task'
        },
        {
          lead: 'Architectural pet project proof',
          text: 'built Ari CRM (full test coverage, linters, MCP) and Obsidian Sync (2,000+ community downloads) proving complete zero-code execution'
        }
      ]
    },
    {
      title: 'Data Sovereignty, On-Premise & Security',
      bullets: [
        {
          lead: 'Dedicated on-premise hardware',
          text: 'proven experience procuring dedicated servers to run local LLMs on-premise when customer communications cannot touch third-party clouds'
        },
        {
          lead: 'Enforce regulatory compliance',
          text: 'partnering with legal and compliance to ensure AI systems strictly follow GDPR, the EU AI Act, and enterprise data protection standards'
        },
        {
          lead: 'Mitigate operational model risks',
          text: 'instituting guardrails against hallucinations, prompt injection vulnerabilities, biased outputs, and private data leakage in customer systems'
        }
      ]
    },
    {
      title: 'Production Reliability & Systems Evolution',
      bullets: [
        {
          lead: 'Early ML to modern LLM solutions',
          text: 'hands-on evolution from 2022 user bot/fraud classification neural nets to documentation vector RAG support agents and LLM spam filters'
        },
        {
          lead: 'Automated testing & review gates',
          text: 'embedding AI-driven local code review, test suite generation, and staging verification into continuous integration pipelines'
        },
        {
          lead: 'Maintain 99.9%+ enterprise SLAs',
          text: 'applying 10+ years of high-load distributed systems discipline to ensure AI-powered services run with zero downtime and strict SLAs'
        }
      ]
    }
  ]
};
