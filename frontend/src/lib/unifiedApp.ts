import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  Database,
  FileText,
  Files,
  LayoutDashboard,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const suiteSourceOwners = ["Claims files","Legal history","Jurisdiction rules","Adjuster notes"];

const features = [
  {
    slug: "claim-risk-intake",
    title: "Claim Risk Intake",
    href: "/claim-risk-intake",
    category: "Intake",
    icon: Bot,
    summary: "Claim facts, policy, damages, claimant profile, jurisdiction, and early risk score.",
    bullets: ["Claim Risk Intake queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Claim Risk Intake", value: "24", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "litigation-propensity",
    title: "Litigation Propensity",
    href: "/litigation-propensity",
    category: "Prediction",
    icon: Workflow,
    summary: "Litigation likelihood, drivers, prior patterns, severity, and confidence.",
    bullets: ["Litigation Propensity queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Litigation Propensity", value: "33", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "evidence-gap-review",
    title: "Evidence Gap Review",
    href: "/evidence-gap-review",
    category: "Evidence",
    icon: Users,
    summary: "Missing photos, statements, estimates, medical records, and investigation gaps.",
    bullets: ["Evidence Gap Review queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Evidence Gap Review", value: "42", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "reserve-risk",
    title: "Reserve Risk",
    href: "/reserve-risk",
    category: "Finance",
    icon: CalendarCheck,
    summary: "Reserve adequacy, severity movement, comparable claims, and escalation threshold.",
    bullets: ["Reserve Risk queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Reserve Risk", value: "51", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "jurisdiction-patterns",
    title: "Jurisdiction Patterns",
    href: "/jurisdiction-patterns",
    category: "Legal",
    icon: ClipboardList,
    summary: "Venue tendencies, counsel patterns, timelines, verdict ranges, and strategy notes.",
    bullets: ["Jurisdiction Patterns queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Jurisdiction Patterns", value: "60", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "counsel-assignment",
    title: "Counsel Assignment",
    href: "/counsel-assignment",
    category: "Legal",
    icon: FileText,
    summary: "Panel counsel options, conflict checks, budget, scope, and assignment status.",
    bullets: ["Counsel Assignment queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Counsel Assignment", value: "69", note: 'Active records' },
      { label: 'Exceptions', value: "2", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "settlement-strategy",
    title: "Settlement Strategy",
    href: "/settlement-strategy",
    category: "Resolution",
    icon: BarChart3,
    summary: "Demand analysis, negotiation range, evidence posture, and recommended strategy.",
    bullets: ["Settlement Strategy queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Settlement Strategy", value: "78", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "adjuster-escalations",
    title: "Adjuster Escalations",
    href: "/adjuster-escalations",
    category: "Operations",
    icon: PackageCheck,
    summary: "Escalation triggers, owner notes, deadlines, and supervisor review.",
    bullets: ["Adjuster Escalations queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Adjuster Escalations", value: "87", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "litigation-watchlist",
    title: "Litigation Watchlist",
    href: "/litigation-watchlist",
    category: "Monitoring",
    icon: ShieldCheck,
    summary: "High-risk claims, status changes, new evidence, and action reminders.",
    bullets: ["Litigation Watchlist queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Litigation Watchlist", value: "96", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "executive-loss-report",
    title: "Executive Loss Report",
    href: "/executive-loss-report",
    category: "Reporting",
    icon: Activity,
    summary: "Portfolio litigation exposure, reserves, trends, hotspots, and recommended actions.",
    bullets: ["Executive Loss Report queue","AI assisted review","Audit-ready output"],
    metrics: [
      { label: "Executive Loss Report", value: "105", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "documents",
    title: "Documents",
    href: "/documents",
    category: "Core Platform",
    icon: Files,
    summary: "Claims Litigation Early Warning documents, evidence, attachments, and exports.",
    bullets: ["Documents","Controls","Audit trail"],
    metrics: [
      { label: "Documents", value: "48", note: 'Tracked' },
      { label: 'Open', value: "7", note: 'Needs review' },
      { label: 'Updated', value: "21", note: 'This week' },
    ],
  },
  {
    slug: "notifications",
    title: "Notifications",
    href: "/notifications",
    category: "Core Platform",
    icon: Bell,
    summary: "Claims Litigation Early Warning alerts, reminders, exceptions, and approvals.",
    bullets: ["Notifications","Controls","Audit trail"],
    metrics: [
      { label: "Notifications", value: "65", note: 'Tracked' },
      { label: 'Open', value: "10", note: 'Needs review' },
      { label: 'Updated', value: "29", note: 'This week' },
    ],
  },
  {
    slug: "integrations",
    title: "Integrations",
    href: "/integrations",
    category: "Core Platform",
    icon: Plug,
    summary: "Claims Litigation Early Warning connector health, sync status, and integration warnings.",
    bullets: ["Integrations","Controls","Audit trail"],
    metrics: [
      { label: "Integrations", value: "82", note: 'Tracked' },
      { label: 'Open', value: "13", note: 'Needs review' },
      { label: 'Updated', value: "37", note: 'This week' },
    ],
  },
  {
    slug: "profiles",
    title: "Profiles",
    href: "/profiles",
    category: "Core Platform",
    icon: UserRound,
    summary: "Claims Litigation Early Warning users, roles, teams, permissions, and ownership settings.",
    bullets: ["Profiles","Controls","Audit trail"],
    metrics: [
      { label: "Profiles", value: "99", note: 'Tracked' },
      { label: 'Open', value: "16", note: 'Needs review' },
      { label: 'Updated', value: "45", note: 'This week' },
    ],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: "Claims Litigation Early Warning assistant for triage, drafting, analysis, recommendations, and operational review.",
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: "Claims Litigation Early Warning AI tools for scoring, generation, extraction, classification, exception review, and reporting.",
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const supplementalFeatures = [
  {
    slug: "counsel-panel-management",
    title: "Counsel Panel Management",
    href: "/counsel-panel-management",
    category: "Governance",
    icon: ShieldCheck,
    summary: "Counsel Panel Management workspace for approval routing, policy controls, ownership, exceptions, audit evidence, and management signoff in Claims Litigation Early Warning.",
    bullets: ["Counsel Panel Management queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Counsel Panel Management", value: "90", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "litigation-trigger-monitor",
    title: "Litigation Trigger Monitor",
    href: "/litigation-trigger-monitor",
    category: "Intelligence Layer",
    icon: Workflow,
    summary: "Litigation Trigger Monitor workspace for AI scoring, signal review, trend analytics, recommended actions, and reviewer feedback in Claims Litigation Early Warning.",
    bullets: ["Litigation Trigger Monitor queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Litigation Trigger Monitor", value: "99", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "venue-judge-analytics",
    title: "Venue & Judge Analytics",
    href: "/venue-judge-analytics",
    category: "Intelligence Layer",
    icon: BarChart3,
    summary: "Venue & Judge Analytics workspace for AI scoring, signal review, trend analytics, recommended actions, and reviewer feedback in Claims Litigation Early Warning.",
    bullets: ["Venue & Judge Analytics queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Venue & Judge Analytics", value: "108", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "demand-package-review",
    title: "Demand Package Review",
    href: "/demand-package-review",
    category: "Operations",
    icon: ClipboardList,
    summary: "Demand Package Review workspace for intake queues, assignments, SLA tracking, exception handling, stakeholder updates, and closeout evidence in Claims Litigation Early Warning.",
    bullets: ["Demand Package Review queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Demand Package Review", value: "117", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "reserve-escalation-board",
    title: "Reserve Escalation Board",
    href: "/reserve-escalation-board",
    category: "Finance",
    icon: CalendarCheck,
    summary: "Reserve Escalation Board workspace for financial exposure, cost movement, approval thresholds, variance review, and executive reporting in Claims Litigation Early Warning.",
    bullets: ["Reserve Escalation Board queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Reserve Escalation Board", value: "126", note: 'Active records' },
      { label: 'Exceptions', value: "7", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "mediation-calendar",
    title: "Mediation Calendar",
    href: "/mediation-calendar",
    category: "Operations",
    icon: PackageCheck,
    summary: "Mediation Calendar workspace for intake queues, assignments, SLA tracking, exception handling, stakeholder updates, and closeout evidence in Claims Litigation Early Warning.",
    bullets: ["Mediation Calendar queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Mediation Calendar", value: "135", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "10", note: 'Next 14 days' },
    ],
  },
  {
    slug: "defense-budget-controls",
    title: "Defense Budget Controls",
    href: "/defense-budget-controls",
    category: "Governance",
    icon: Activity,
    summary: "Defense Budget Controls workspace for approval routing, policy controls, ownership, exceptions, audit evidence, and management signoff in Claims Litigation Early Warning.",
    bullets: ["Defense Budget Controls queue","Subfeature work items","Audit-ready output"],
    metrics: [
      { label: "Defense Budget Controls", value: "144", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "11", note: 'Next 14 days' },
    ],
  }
] as const;

const productionPlatformFeatures = [
  {
    slug: "enterprise-identity-access",
    title: "Enterprise Identity & Access",
    href: "/enterprise-identity-access",
    category: "Production Platform",
    icon: ShieldCheck,
    summary: "Enterprise Identity & Access workspace for domain workflows, approvals, evidence, and reporting in Claims Litigation Early Warning.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Enterprise Identity & Access", value: "90", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "connector-operations-center",
    title: "Connector Operations Center",
    href: "/connector-operations-center",
    category: "Production Platform",
    icon: Workflow,
    summary: "Connector Operations Center workspace for domain workflows, approvals, evidence, and reporting in Claims Litigation Early Warning.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Connector Operations Center", value: "99", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "6", note: 'Next 14 days' },
    ],
  },
  {
    slug: "audit-export-center",
    title: "Audit Export Center",
    href: "/audit-export-center",
    category: "Production Platform",
    icon: BarChart3,
    summary: "Audit Export Center workspace for domain workflows, approvals, evidence, and reporting in Claims Litigation Early Warning.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Audit Export Center", value: "108", note: 'Active records' },
      { label: 'Exceptions', value: "5", note: 'Need review' },
      { label: 'Due Soon', value: "7", note: 'Next 14 days' },
    ],
  },
  {
    slug: "notification-delivery-ledger",
    title: "Notification Delivery Ledger",
    href: "/notification-delivery-ledger",
    category: "Production Platform",
    icon: ClipboardList,
    summary: "Notification Delivery Ledger workspace for domain workflows, approvals, evidence, and reporting in Claims Litigation Early Warning.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Notification Delivery Ledger", value: "117", note: 'Active records' },
      { label: 'Exceptions', value: "6", note: 'Need review' },
      { label: 'Due Soon', value: "8", note: 'Next 14 days' },
    ],
  },
  {
    slug: "observability-runbooks",
    title: "Observability & Runbooks",
    href: "/observability-runbooks",
    category: "Production Platform",
    icon: CalendarCheck,
    summary: "Observability & Runbooks workspace for domain workflows, approvals, evidence, and reporting in Claims Litigation Early Warning.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Observability & Runbooks", value: "126", note: 'Active records' },
      { label: 'Exceptions', value: "7", note: 'Need review' },
      { label: 'Due Soon', value: "9", note: 'Next 14 days' },
    ],
  },
  {
    slug: "release-test-harness",
    title: "Release Test Harness",
    href: "/release-test-harness",
    category: "Production Platform",
    icon: PackageCheck,
    summary: "Release Test Harness workspace for domain workflows, approvals, evidence, and reporting in Claims Litigation Early Warning.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Release Test Harness", value: "135", note: 'Active records' },
      { label: 'Exceptions', value: "3", note: 'Need review' },
      { label: 'Due Soon', value: "10", note: 'Next 14 days' },
    ],
  },
  {
    slug: "production-gap-workspace",
    title: "Production Gap Workspace",
    href: "/production-gap-workspace",
    category: "Production Platform",
    icon: Activity,
    summary: "Production Gap Workspace workspace for domain workflows, approvals, evidence, and reporting in Claims Litigation Early Warning.",
    bullets: ["Production controls","Evidence tracking","Launch readiness"],
    metrics: [
      { label: "Production Gap Workspace", value: "144", note: 'Active records' },
      { label: 'Exceptions', value: "4", note: 'Need review' },
      { label: 'Due Soon', value: "11", note: 'Next 14 days' },
    ],
  }
] as const;

const allFeatures = [...features, ...supplementalFeatures, ...productionPlatformFeatures, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Production Readiness', href: '/production-readiness', icon: ShieldCheck },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  { name: 'Production Platform Controls', features: ['Enterprise Identity & Access', 'Connector Operations Center', 'Audit Export Center', 'Notification Delivery Ledger', 'Observability & Runbooks', 'Release Test Harness', 'Production Gap Workspace'] },
  { name: "Litigation Risk Controls", features: ["Counsel Panel Management","Litigation Trigger Monitor","Venue & Judge Analytics","Demand Package Review","Reserve Escalation Board","Mediation Calendar","Defense Budget Controls"] },
  {
    "name": "Intake",
    "features": [
      "Claim Risk Intake"
    ]
  },
  {
    "name": "Prediction",
    "features": [
      "Litigation Propensity"
    ]
  },
  {
    "name": "Evidence",
    "features": [
      "Evidence Gap Review"
    ]
  },
  {
    "name": "Finance",
    "features": [
      "Reserve Risk"
    ]
  },
  {
    "name": "Legal",
    "features": [
      "Jurisdiction Patterns",
      "Counsel Assignment"
    ]
  },
  {
    "name": "Resolution",
    "features": [
      "Settlement Strategy"
    ]
  },
  {
    "name": "Operations",
    "features": [
      "Adjuster Escalations"
    ]
  },
  {
    "name": "Monitoring",
    "features": [
      "Litigation Watchlist"
    ]
  },
  {
    "name": "Reporting",
    "features": [
      "Executive Loss Report"
    ]
  },
  {
    "name": "Core Platform",
    "features": [
      "Documents",
      "Notifications",
      "Integrations",
      "Profiles"
    ]
  },
  {
    "name": "Intelligence Layer",
    "features": [
      "AI Assistant",
      "AI Tools"
    ]
  }
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: feature.title + ' is implemented as a dedicated Claims Litigation Early Warning workflow with records, AI assistance, approvals, audit, and reporting.',
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries([...features, ...supplementalFeatures, ...productionPlatformFeatures].map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: suiteSourceOwners,
      operatingQueues: [feature.title + ' records', feature.title + ' approvals', feature.title + ' exceptions'],
      outputs: [feature.title + ' dashboard', feature.title + ' export', feature.title + ' audit trail'],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'AI Tools', href: '/features/ai-tools' }],
    },
  ]),
);
