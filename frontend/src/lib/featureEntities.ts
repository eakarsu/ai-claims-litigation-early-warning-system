export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  [
    "claim-risk-intake",
    "Claim Risk Intake Records",
    "Claim Risk Intake priority queue",
    "Open",
    "Claim Risk Intake exception list",
    "Intake Lead",
    "$0"
  ],
  [
    "litigation-propensity",
    "Litigation Propensity Records",
    "Litigation Propensity priority queue",
    "Review",
    "Litigation Propensity exception list",
    "Prediction Lead",
    "$0"
  ],
  [
    "evidence-gap-review",
    "Evidence Gap Review Records",
    "Evidence Gap Review priority queue",
    "Action needed",
    "Evidence Gap Review exception list",
    "Evidence Lead",
    "$0"
  ],
  [
    "reserve-risk",
    "Reserve Risk Records",
    "Reserve Risk priority queue",
    "Open",
    "Reserve Risk exception list",
    "Finance Lead",
    "$0"
  ],
  [
    "jurisdiction-patterns",
    "Jurisdiction Patterns Records",
    "Jurisdiction Patterns priority queue",
    "Review",
    "Jurisdiction Patterns exception list",
    "Legal Lead",
    "$0"
  ],
  [
    "counsel-assignment",
    "Counsel Assignment Records",
    "Counsel Assignment priority queue",
    "Action needed",
    "Counsel Assignment exception list",
    "Legal Lead",
    "$0"
  ],
  [
    "settlement-strategy",
    "Settlement Strategy Records",
    "Settlement Strategy priority queue",
    "Open",
    "Settlement Strategy exception list",
    "Resolution Lead",
    "$0"
  ],
  [
    "adjuster-escalations",
    "Adjuster Escalations Records",
    "Adjuster Escalations priority queue",
    "Review",
    "Adjuster Escalations exception list",
    "Operations Lead",
    "$0"
  ],
  [
    "litigation-watchlist",
    "Litigation Watchlist Records",
    "Litigation Watchlist priority queue",
    "Action needed",
    "Litigation Watchlist exception list",
    "Monitoring Lead",
    "$0"
  ],
  [
    "executive-loss-report",
    "Executive Loss Report Records",
    "Executive Loss Report priority queue",
    "Open",
    "Executive Loss Report exception list",
    "Reporting Lead",
    "$0"
  ],
  [
    "documents",
    "Documents Records",
    "Documents priority queue",
    "Review",
    "Documents exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "notifications",
    "Notifications Records",
    "Notifications priority queue",
    "Action needed",
    "Notifications exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "integrations",
    "Integrations Records",
    "Integrations priority queue",
    "Open",
    "Integrations exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "profiles",
    "Profiles Records",
    "Profiles priority queue",
    "Review",
    "Profiles exception list",
    "Core Platform Lead",
    "$0"
  ],
  [
    "ai-assistant",
    "AI Assistant Records",
    "AI Assistant priority queue",
    "Action needed",
    "AI Assistant exception list",
    "Intelligence Layer Lead",
    "$0"
  ],
  [
    "ai-tools",
    "AI Tools Records",
    "AI Tools priority queue",
    "Open",
    "AI Tools exception list",
    "Intelligence Layer Lead",
    "$0"
  ]
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-06-03', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-06-06', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} audit queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-06-10', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
