export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  {
    "name": "Claims files",
    "ownership": "Claims files contributes operating evidence, workflows, control signals, and reporting inputs to Claims Litigation Early Warning.",
    "coverage": [
      "Claim Risk Intake",
      "Litigation Propensity",
      "AI tools",
      "Audit evidence"
    ]
  },
  {
    "name": "Legal history",
    "ownership": "Legal history contributes operating evidence, workflows, control signals, and reporting inputs to Claims Litigation Early Warning.",
    "coverage": [
      "Litigation Propensity",
      "Evidence Gap Review",
      "AI tools",
      "Audit evidence"
    ]
  },
  {
    "name": "Jurisdiction rules",
    "ownership": "Jurisdiction rules contributes operating evidence, workflows, control signals, and reporting inputs to Claims Litigation Early Warning.",
    "coverage": [
      "Evidence Gap Review",
      "Reserve Risk",
      "AI tools",
      "Audit evidence"
    ]
  },
  {
    "name": "Adjuster notes",
    "ownership": "Adjuster notes contributes operating evidence, workflows, control signals, and reporting inputs to Claims Litigation Early Warning.",
    "coverage": [
      "Reserve Risk",
      "Jurisdiction Patterns",
      "AI tools",
      "Audit evidence"
    ]
  }
];

export const dashboardMetrics: Metric[] = [
  { label: 'Workflow Areas', value: '10', note: 'Dedicated modules' },
  { label: 'Evidence Sources', value: '4', note: 'Mapped sources' },
  { label: 'AI Tools', value: '13', note: 'Suite copilots' },
  { label: 'Open Work', value: '64', note: 'Across workflows' },
];

export const healthMetrics: Metric[] = [
  { label: 'Connector Health', value: '96%', note: 'Pilot baseline' },
  { label: 'Audit Coverage', value: '100%', note: 'All workflows logged' },
  { label: 'Review Queue', value: '22', note: 'Needs owner action' },
  { label: 'Automation Runs', value: '349', note: 'Last 24 hours' },
];

export const dashboardModules = [
  "Claim Risk Intake operating view",
  "Litigation Propensity operating view",
  "Evidence Gap Review operating view",
  "Reserve Risk operating view",
  "Jurisdiction Patterns operating view",
  "Counsel Assignment operating view",
  "Settlement Strategy operating view",
  "Adjuster Escalations operating view"
];
export const workflowHighlights = [
  "Claim Risk Intake workflow with records, AI assist, approvals, audit, and reporting",
  "Litigation Propensity workflow with records, AI assist, approvals, audit, and reporting",
  "Evidence Gap Review workflow with records, AI assist, approvals, audit, and reporting",
  "Reserve Risk workflow with records, AI assist, approvals, audit, and reporting",
  "Jurisdiction Patterns workflow with records, AI assist, approvals, audit, and reporting",
  "Counsel Assignment workflow with records, AI assist, approvals, audit, and reporting"
];
