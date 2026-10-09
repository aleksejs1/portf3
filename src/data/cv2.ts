import type { CvData } from './cv';
export { calculateTenure } from './cv';

export const cv2Data: CvData = {
  personal: {
    name: 'Aleksejs Kovaļovs',
    title: 'Head of IT & Business Technology Candidate · 15+ Years Experience',
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
      'Core Banking Rigor & High-Load Scale: 5.5 yrs DNB Bank financial consistency, 400,000+ IoT devices, millions of users',
      'Operational Excellence & Governance: Architecture Decision Records (ADRs), post-mortems, incident mitigation, single source of truth',
      'Pragmatic Architecture & Modernization: Scalable distributed systems, API integrations, cloud reliability & tech debt reduction'
    ],
    [
      'Applied AI & Workflow Automation: Driving team-wide AI adoption, practical agentic tooling, prompt engineering & PoC validation',
      'Delivery Predictability & Roadmaps: Quarterly planning tied to business KPIs, OKR execution, cross-team unblocking & alignment',
      'People Leadership & Culture: 7 direct reports, 9 peer teams, psychological safety, transparent career paths & team retention'
    ]
  ],
  responsibilities: [
    {
      title: 'People Leadership & Culture',
      bullets: [
        {
          lead: 'Lead high-trust teams',
          text: 'driving psychological safety and a blameless culture, managing 7 direct reports with clear accountability'
        },
        {
          lead: 'Accelerate engineer growth',
          text: 'via structured 1-on-1s, personalized career progression paths, and proactive burnout prevention'
        },
        {
          lead: 'Systematically improve retention',
          text: 'conducting exit interviews across the IT department and translating feedback into cultural enhancements'
        }
      ]
    },
    {
      title: 'Applied AI & Process Automation',
      bullets: [
        {
          lead: 'Embed practical AI tools',
          text: 'and custom domain skills to eliminate repetitive operational toil and elevate team productivity'
        },
        {
          lead: 'Lead hands-on workshops',
          text: 'upskilling team members in prompt engineering, agentic workflows, and modern automation tools'
        },
        {
          lead: 'Build rapid validation PoCs',
          text: 'prototyping feasibility quickly to derisk architectural and technical choices before full investment'
        }
      ]
    },
    {
      title: 'Strategy, OKRs & Predictable Delivery',
      bullets: [
        {
          lead: 'Align tech with business KPIs',
          text: 'leading quarterly roadmap planning tied directly to company objectives and measurable milestones'
        },
        {
          lead: 'Drive transparent OKR execution',
          text: 'defining clear milestones that foster high focus, dependable delivery velocity, and accountability'
        },
        {
          lead: 'Manage end-to-end delivery',
          text: 'unblocking cross-team dependencies, mitigating operational risks, and improving observability'
        }
      ]
    },
    {
      title: 'Architecture, Data & Systems Reliability',
      bullets: [
        {
          lead: 'High-reliability foundation',
          text: 'grounded in 5.5 years of core banking rigor (DNB) with zero-tolerance for data inconsistencies and downtime'
        },
        {
          lead: 'Set architectural guardrails',
          text: 'maintaining shared technical standards and pragmatic alignment across all 9 peer engineering teams'
        },
        {
          lead: 'Balance velocity with stability',
          text: 'consolidating fragmented tools into reusable platforms while systematically paying down tech debt'
        }
      ]
    },
    {
      title: 'Cross-Team Alignment & Documentation Standards',
      bullets: [
        {
          lead: 'Partner with Product leadership',
          text: 'on roadmaps, resource trade-offs, and prioritizing technical investments that support business growth'
        },
        {
          lead: 'Facilitate Architecture Decision Records',
          text: '(ADRs) to establish collective consensus, transparent audit trails, and consistent engineering standards'
        },
        {
          lead: 'Single source of truth',
          text: 'organizing system documentation and technical knowledge so processes are maintainable and transparent'
        }
      ]
    },
    {
      title: 'Operational Excellence & Continuous Improvement',
      bullets: [
        {
          lead: 'Modernize delivery workflows',
          text: 'championing cloud automation and eliminating release bottlenecks to accelerate delivery turnaround'
        },
        {
          lead: 'Protect release confidence',
          text: 'introducing automated end-to-end testing rituals to prevent regressions across business-critical platforms'
        },
        {
          lead: 'Pragmatic process digitalization',
          text: 'proven ability to engineer tailored software to automate administrative operations and billing (zardi.lv)'
        }
      ]
    }
  ]
};
