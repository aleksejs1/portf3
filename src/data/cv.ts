export interface CvContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  linkedinUrl: string;
  portfolio: string;
  portfolioUrl: string;
}

export interface CvPersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  contacts: CvContactInfo;
}

export interface CvEducationItem {
  period: string;
  institution: string;
  degree: string;
}

export interface CvExperienceItem {
  id: string;
  startYear: number;
  startMonth: number; // 1 - 12
  endYear?: number;
  endMonth?: number;
  isCurrent?: boolean;
  periodText?: string;
  company: string;
  role: string;
}

export interface CvBullet {
  lead: string;
  text: string;
}

export interface CvResponsibilityGroup {
  title: string;
  bullets: CvBullet[];
}

export interface CvData {
  personal: CvPersonalInfo;
  education: CvEducationItem[];
  experience: CvExperienceItem[];
  qualities: [string[], string[]];
  responsibilities: CvResponsibilityGroup[];
}

/**
 * Calculates tenure in "X years Y months" format dynamically.
 */
export function calculateTenure(
  startYear: number,
  startMonth: number,
  endYear?: number,
  endMonth?: number
): string {
  const targetEnd = (endYear !== undefined && endMonth !== undefined)
    ? { year: endYear, month: endMonth }
    : { year: new Date().getFullYear(), month: new Date().getMonth() + 1 };

  let totalMonths = (targetEnd.year - startYear) * 12 + (targetEnd.month - startMonth);
  if (totalMonths < 0) totalMonths = 0;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearPart = years > 0 ? `${years} ${years === 1 ? 'year' : 'years'}` : '';
  const monthPart = months > 0 ? `${months} ${months === 1 ? 'month' : 'months'}` : '';

  if (yearPart && monthPart) {
    return `${yearPart} ${monthPart}`;
  }
  if (yearPart) {
    return yearPart;
  }
  return monthPart || '0 months';
}

export const cvData: CvData = {
  personal: {
    name: 'Aleksejs Kovaļovs',
    title: 'Director of AI Development Candidate · 15+ Years Experience',
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
      degree: 'Bachelor’s degree in Electrical Engineering'
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
      role: 'Project Manager / technical lead'
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
      role: 'PHP Developer / pp.lv backend team'
    },
    {
      id: 'dnb',
      startYear: 2011,
      startMonth: 4,
      endYear: 2016,
      endMonth: 11,
      periodText: 'Apr. 2011 – Nov. 2016 (5 years 8 months)',
      company: 'AS DNB Banka',
      role: 'Functional Analyst / core banking team'
    }
  ],
  qualities: [
    [
      'Applied ML & LLM Evolution (2010–Present): University ML exposure (2010), pre-LLM fraud neural nets (2022), RAG support bots, and on-premise LLM spam filters (2025)',
      '10x AI SDLC Transformation (Mapon): Rebuilt team workflow where AI executes ~90% of tasks from refinement & coding to stage testing, Jira & sprint repo reporting',
      'Core Banking & High-Load Scale: 5.5 yrs DNB Bank rigor, millions of daily users at inbox.lv (99.9%+ availability), 400,000+ real-time IoT devices at Mapon'
    ],
    [
      'People Leadership & Sustainable Pacing: Leading 7 direct reports (9 peer teams), psychological safety, IT exit interviews, and managing 10x cognitive load to prevent burnout',
      'Hands-On Agentic Engineering: Returned to coding via AI without an IDE — resolving legacy memory leaks & logs at work; built Ari CRM (MCP) & Obsidian plugin (2,000+ downloads)',
      'Strategic Roadmaps & Delivery Predictability: Quarterly OKR planning with Product & Executive leadership, Architecture Decision Records (ADRs), and automated CI/CD & E2E quality gates'
    ]
  ],
  responsibilities: [
    {
      title: 'People Leadership, Pacing & Culture',
      bullets: [
        {
          lead: 'Drive psychological safety',
          text: 'and a blameless culture, leading a high-trust engineering team of 7 direct reports'
        },
        {
          lead: 'Guard against 10x burnout',
          text: 'recognizing that 10x AI velocity causes acute mental fatigue; tracking team state and pacing work via structured 1-on-1s'
        },
        {
          lead: 'Conduct exit interviews',
          text: 'across the IT department, analyzing feedback to systematically improve team retention'
        }
      ]
    },
    {
      title: '10x AI SDLC & Team Enablement (Mapon)',
      bullets: [
        {
          lead: 'Rebuild SDLC around AI (~90%)',
          text: 'automating task creation, analysis, refinement, meeting question prep, implementation, and deployment plans'
        },
        {
          lead: 'Automate reviews, QA & reporting',
          text: 'running AI-driven local and external code reviews, test environment validation, Jira updates, and sprint repo reporting'
        },
        {
          lead: 'Lead hands-on AI workshops',
          text: 'upskilling engineers in agentic workflows while accounting for human meta-context that AI cannot digitize'
        }
      ]
    },
    {
      title: 'ML & On-Premise LLM Projects (inbox.lv)',
      bullets: [
        {
          lead: 'Lead pre-LLM fraud detection',
          text: 'guided an engineer in late 2022 in training a neural network to classify new registrations as real users, bots, or fraudsters'
        },
        {
          lead: 'Build LLM & RAG PoCs',
          text: 'led development of an AI email translator PoC and a support agent powered by a vector database of internal documentation'
        },
        {
          lead: 'Deploy on-premise spam LLMs',
          text: 'connected LLMs to spam filters in 2025 using dedicated self-hosted hardware to keep sensitive email data off the cloud'
        }
      ]
    },
    {
      title: 'Hands-On AI Coding & Architecture',
      bullets: [
        {
          lead: 'Resolve complex legacy issues',
          text: 'returned to coding via AI (nearly IDE-free) on a massive legacy codebase: handling support, cross-team requests, log analysis, and memory leaks'
        },
        {
          lead: 'Build AI-native pet projects',
          text: 'created Ari CRM (plugin architecture, MCP, full tests/linters), Encrypted 1-on-1 (E2EE), and an Obsidian plugin (2,000+ downloads)'
        },
        {
          lead: 'Set architectural guardrails',
          text: 'maintaining shared technical alignment and consolidating fragmented solutions into reusable platforms across 9 peer teams'
        }
      ]
    },
    {
      title: 'Strategy, OKRs & Cross-Team Alignment',
      bullets: [
        {
          lead: 'Influence technical strategy',
          text: 'partnering with Product and Executive leadership on quarterly roadmap planning, resource trade-offs, and technical priorities'
        },
        {
          lead: 'Define team OKRs',
          text: 'and delivery milestones, unblocking cross-team dependencies, mitigating operational risks, and elevating observability'
        },
        {
          lead: 'Modernize documentation & ADRs',
          text: 'facilitating architecture forums, implementing Architecture Decision Records, and maintaining a single source of truth'
        }
      ]
    },
    {
      title: 'Platform, CI/CD & Operational Rigor',
      bullets: [
        {
          lead: 'Champion automated cloud CI/CD',
          text: 'resolving day-long manual frontend build merge locks and optimizing cloud runner resource consumption'
        },
        {
          lead: 'Introduce automated E2E testing',
          text: 'establishing end-to-end testing rituals to prevent release regressions and protect deployment confidence'
        },
        {
          lead: 'Core banking & high-load roots',
          text: '5.5 years in DNB core banking systems and 5 years building high-throughput mail services handling millions of daily messages'
        }
      ]
    }
  ]
};
