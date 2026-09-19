export interface LeadershipPillar {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  principles: {
    heading: string;
    description: string;
  }[];
}

export const leadershipPillars: LeadershipPillar[] = [
  {
    id: 'people-first',
    icon: 'Users',
    title: 'People-First Engineering Culture',
    subtitle: 'Growing autonomous, high-trust engineering teams that deliver.',
    principles: [
      {
        heading: 'Psychological Safety & Blameless Learning',
        description: 'High performance begins with safety. When incidents occur, we run blameless post-mortems focused on system resilience and process improvement, not finding culprits.'
      },
      {
        heading: 'Structured 1-on-1s & Deliberate Growth',
        description: '1-on-1s are employee-owned coaching conversations, not status updates. I invest in clear career ladders, personalized feedback, and continuous engineering mentorship.'
      },
      {
        heading: 'Autonomous Ownership with Context',
        description: 'Rather than dictating solutions, I provide strategic context and clear outcomes. Teams are empowered to architect, build, and operate their systems with genuine accountability.'
      }
    ]
  },
  {
    id: 'pragmatic-tech',
    icon: 'Cpu',
    title: 'Pragmatic Architecture & Tech Strategy',
    subtitle: 'Simplicity, resilience, and proven fundamentals over hype.',
    principles: [
      {
        heading: 'Architecture for Business Outcomes',
        description: 'Technology is an enabler, not a playground for resume-driven development. Every architectural decision is evaluated against cost, time-to-market, and maintainability.'
      },
      {
        heading: 'Hands-on Technical Fluency',
        description: 'With 10+ years of high-load backend and core banking experience, I talk with engineers at their level, challenge assumptions constructively, and maintain natural credibility.'
      },
      {
        heading: 'Proactive Tech Debt Management',
        description: 'Technical debt is not ignored until it paralyzes delivery. I build deliberate engineering time for platform maintenance, test automation, and refactoring into every roadmap.'
      }
    ]
  },
  {
    id: 'business-alignment',
    icon: 'TrendingUp',
    title: 'Business & Engineering Alignment',
    subtitle: 'Transforming engineering from a ticket-taking factory into a strategic partner.',
    principles: [
      {
        heading: 'Speaking the Language of Business',
        description: 'I translate technical risks, architecture upgrades, and platform refactors into business language: revenue impact, uptime SLAs, risk mitigation, and hiring efficiency.'
      },
      {
        heading: 'Predictable Delivery & Continuous Flow',
        description: 'By identifying bottlenecks in the delivery pipeline and eliminating unnecessary meetings, I help teams achieve predictable sprint cadence and faster time-to-market.'
      },
      {
        heading: 'Customer Empathy in Code',
        description: 'I ensure every engineer understands our customers and business metrics. When engineers see the real-world impact of their work, engagement and product quality skyrocket.'
      }
    ]
  }
];
