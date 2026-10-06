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

export interface CvSkillColumn {
  items: string[];
}

export interface CvResponsibilityGroup {
  title: string;
  bullets: string[];
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
    subtitle: 'Born on May 16, 1990 in Riga ❤',
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
      period: '2011',
      institution: 'Institute of Transport and Telecommunications',
      degree: 'IT Project Management qualification course'
    },
    {
      period: '2009-2013',
      institution: 'Institute of Transport and Telecommunications',
      degree: 'Bachelor’s degree in Electrical Engineering'
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
      role: 'Member of the Board'
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
      'Core Banking & Payments Reliability, High-Load Distributed Architecture, Zero-Downtime SLAs',
      'Operational Excellence, Incident Response & On-Call Rituals, Security & Compliance, Observability',
      'Technical Architecture & Microservices, Pragmatic Tech Modernization (PHP, Go, Cloud, CI/CD)'
    ],
    [
      'Engineering Leadership, Scaling Cross-Functional Agile Teams, High-Performance Culture',
      'Strategic Tech Roadmaps, Delivery Predictability & Velocity, ROI & Tech Investment Prioritization',
      'Riga Tech Hub Site Leadership & Hiring, Mentorship, Executive & Cross-Functional Communication'
    ]
  ],
  responsibilities: [
    {
      title: 'People Leadership & Culture',
      bullets: [
        'Establish psychological safety and a blameless culture, empowering engineers to innovate without fear of failure',
        'Drive individual career growth through structured 1-on-1s, tailored growth roadmaps, and proactive burnout prevention',
        'Facilitate cross-team empathy and open communication channels across the entire engineering department',
        'Conduct IT department exit interviews, synthesizing root-cause feedback to improve retention and organizational health'
      ]
    },
    {
      title: 'Applied AI & Innovation',
      bullets: [
        'Spearhead pragmatic AI adoption across daily engineering workflows, multiplying team velocity and output',
        'Design and lead hands-on workshops to upskill engineering teams in modern AI tooling and agentic workflows',
        'Build rapid AI-assisted proof-of-concepts (PoCs) to stress-test emerging architectures and validate strategic feasibility'
      ]
    },
    {
      title: 'Technology Strategy & Governance',
      bullets: [
        'Co-author and shape company-wide technical strategy alongside executive stakeholders',
        'Maintain architectural governance, establishing clear guardrails and proactively steering projects when technical drift occurs',
        'Balance immediate business delivery velocity with long-term architectural sustainability and technical debt reduction'
      ]
    },
    {
      title: 'Engineering Processes & SDLC',
      bullets: [
        'Modernize software development lifecycle (SDLC) to align with strategic delivery goals and continuous delivery standards',
        'Transform engineering documentation into a reliable, single-source-of-truth knowledge base',
        'Architect domain-specific AI skills and automation workflows to eliminate routine operational and procedural friction'
      ]
    },
    {
      title: 'Cross-Team Alignment & Systems Thinking',
      bullets: [
        'Consolidate fragmented, team-isolated solutions into standardized, reusable company-wide platforms',
        'Facilitate cross-functional architecture forums and RFC rituals to drive collaborative, data-driven decisions',
        'Bridge alignment and trust between Product and Engineering leadership on delivery roadmaps and trade-offs'
      ]
    },
    {
      title: 'Platform, CI/CD & Quality Engineering',
      bullets: [
        'Champion modern engineering standards across pipelines, accelerating cycle time from commit to production',
        'Significantly optimize frontend build performance and cloud resource consumption across CI/CD runners',
        'Drive company-wide adoption of automated End-to-End (E2E) testing suites to safeguard release confidence and eliminate regression risks'
      ]
    }
  ]
};
