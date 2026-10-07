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
  anchor: string;
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
    title: 'CTO / VP of Engineering Candidate · 15+ Years Experience',
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
      'Core Banking Reliability & 400,000+ IoT Real-Time Devices, Distributed High-Load Architecture',
      'Operational Excellence, Incident Response & On-Call Rituals, Security & Compliance, Observability',
      'Technical Architecture & Microservices, Pragmatic Modernization (PHP, Go, Cloud, CI/CD)'
    ],
    [
      'Engineering Leadership (7 Direct Reports, 9 Teams), Cross-Functional Culture & Psych Safety',
      'Strategic Tech Roadmaps, Delivery Predictability & Velocity, ROI & Tech Investment Prioritization',
      'Riga Tech Hub Site Leadership & Hiring, Mentorship, Executive & Cross-Functional Alignment'
    ]
  ],
  responsibilities: [
    {
      title: 'People Leadership & Culture',
      bullets: [
        {
          anchor: 'Psychological Safety:',
          text: 'Establish blameless culture empowering high-trust engineering across 7 direct reports and 9 cross-functional teams'
        },
        {
          anchor: 'Career Growth:',
          text: 'Drive engineer development via structured 1-on-1s, transparent career paths, and proactive burnout prevention'
        },
        {
          anchor: 'Retention & Exit Analysis:',
          text: 'Conduct IT department exit interviews, analyzing feedback to systematically improve team retention'
        }
      ]
    },
    {
      title: 'Applied AI & Innovation',
      bullets: [
        {
          anchor: 'Agentic Workflows:',
          text: 'Introduce practical AI tools and custom domain skills to eliminate repetitive engineering toil'
        },
        {
          anchor: 'Hands-on Workshops:',
          text: 'Upskill engineering teams in AI-assisted workflows, prompt engineering, and modern development tools'
        },
        {
          anchor: 'Rapid De-Risking:',
          text: 'Build functional AI-assisted PoCs to test new architectures and validate feasibility before full commitments'
        }
      ]
    },
    {
      title: 'Strategy, OKRs & Delivery',
      bullets: [
        {
          anchor: 'Strategic Direction:',
          text: 'Influence company-wide technical strategy and lead quarterly roadmap planning tied directly to business KPIs'
        },
        {
          anchor: 'Team OKRs:',
          text: 'Define team OKRs and delivery milestones, ensuring high focus, transparent velocity, and team accountability'
        },
        {
          anchor: 'Delivery Management:',
          text: 'Manage end-to-end delivery: unblock dependencies, mitigate operational risks, and elevate system observability'
        }
      ]
    },
    {
      title: 'Architecture & Standards',
      bullets: [
        {
          anchor: 'Architecture Guardrails:',
          text: 'Set technical standards and maintain shared architectural alignment across all 9 engineering teams'
        },
        {
          anchor: 'Resilience vs Velocity:',
          text: 'Balance fast product delivery with platform resilience, tech debt reduction, and zero-downtime reliability'
        },
        {
          anchor: 'Platform Consolidation:',
          text: 'Consolidate fragmented, team-isolated solutions into standardized shared platforms and services'
        }
      ]
    },
    {
      title: 'Cross-Team Alignment & SDLC',
      bullets: [
        {
          anchor: 'Product-Tech Partnership:',
          text: 'Bridge communication between Product and Engineering on roadmaps, resource trade-offs, and tech priorities'
        },
        {
          anchor: 'Single Source of Truth:',
          text: 'Modernize the SDLC and organize engineering architecture and documentation into centralized living knowledge'
        },
        {
          anchor: 'Consensus via ADRs:',
          text: 'Host cross-team architecture forums and implement Architecture Decision Records (ADRs) for collective alignment'
        }
      ]
    },
    {
      title: 'Platform, CI/CD & Quality Engineering',
      bullets: [
        {
          anchor: 'CI/CD Transformation:',
          text: 'Championed automated cloud CI/CD pipelines, resolving day-long manual frontend build merge locks across teams'
        },
        {
          anchor: 'Resource Optimization:',
          text: 'Significantly optimized frontend build performance and cloud runner resource consumption to accelerate delivery'
        },
        {
          anchor: 'Automated E2E Testing:',
          text: 'Introduced automated End-to-End (E2E) testing rituals to prevent release regressions and protect release confidence'
        }
      ]
    }
  ]
};
