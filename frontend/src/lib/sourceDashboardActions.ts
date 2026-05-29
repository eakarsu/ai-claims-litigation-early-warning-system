export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "claim-risk-intake",
    "label": "Claim Risk Intake",
    "description": "Claim Risk Intake action group for Claims Litigation Early Warning.",
    "href": "/claim-risk-intake",
    "sourceProjects": [
      "Claims files",
      "Legal history"
    ],
    "examples": [
      "Open Claim Risk Intake",
      "Review Intake",
      "Run Claim Risk Intake AI check"
    ],
    "count": 3
  },
  {
    "id": "litigation-propensity",
    "label": "Litigation Propensity",
    "description": "Litigation Propensity action group for Claims Litigation Early Warning.",
    "href": "/litigation-propensity",
    "sourceProjects": [
      "Legal history",
      "Jurisdiction rules"
    ],
    "examples": [
      "Open Litigation Propensity",
      "Review Prediction",
      "Run Litigation Propensity AI check"
    ],
    "count": 3
  },
  {
    "id": "evidence-gap-review",
    "label": "Evidence Gap Review",
    "description": "Evidence Gap Review action group for Claims Litigation Early Warning.",
    "href": "/evidence-gap-review",
    "sourceProjects": [
      "Jurisdiction rules",
      "Adjuster notes"
    ],
    "examples": [
      "Open Evidence Gap Review",
      "Review Evidence",
      "Run Evidence Gap Review AI check"
    ],
    "count": 3
  },
  {
    "id": "reserve-risk",
    "label": "Reserve Risk",
    "description": "Reserve Risk action group for Claims Litigation Early Warning.",
    "href": "/reserve-risk",
    "sourceProjects": [
      "Adjuster notes"
    ],
    "examples": [
      "Open Reserve Risk",
      "Review Finance",
      "Run Reserve Risk AI check"
    ],
    "count": 3
  },
  {
    "id": "jurisdiction-patterns",
    "label": "Jurisdiction Patterns",
    "description": "Jurisdiction Patterns action group for Claims Litigation Early Warning.",
    "href": "/jurisdiction-patterns",
    "sourceProjects": [
      "Claims files",
      "Legal history"
    ],
    "examples": [
      "Open Jurisdiction Patterns",
      "Review Legal",
      "Run Jurisdiction Patterns AI check"
    ],
    "count": 3
  },
  {
    "id": "counsel-assignment",
    "label": "Counsel Assignment",
    "description": "Counsel Assignment action group for Claims Litigation Early Warning.",
    "href": "/counsel-assignment",
    "sourceProjects": [
      "Legal history",
      "Jurisdiction rules"
    ],
    "examples": [
      "Open Counsel Assignment",
      "Review Legal",
      "Run Counsel Assignment AI check"
    ],
    "count": 3
  },
  {
    "id": "settlement-strategy",
    "label": "Settlement Strategy",
    "description": "Settlement Strategy action group for Claims Litigation Early Warning.",
    "href": "/settlement-strategy",
    "sourceProjects": [
      "Jurisdiction rules",
      "Adjuster notes"
    ],
    "examples": [
      "Open Settlement Strategy",
      "Review Resolution",
      "Run Settlement Strategy AI check"
    ],
    "count": 3
  },
  {
    "id": "adjuster-escalations",
    "label": "Adjuster Escalations",
    "description": "Adjuster Escalations action group for Claims Litigation Early Warning.",
    "href": "/adjuster-escalations",
    "sourceProjects": [
      "Adjuster notes"
    ],
    "examples": [
      "Open Adjuster Escalations",
      "Review Operations",
      "Run Adjuster Escalations AI check"
    ],
    "count": 3
  },
  {
    "id": "litigation-watchlist",
    "label": "Litigation Watchlist",
    "description": "Litigation Watchlist action group for Claims Litigation Early Warning.",
    "href": "/litigation-watchlist",
    "sourceProjects": [
      "Claims files",
      "Legal history"
    ],
    "examples": [
      "Open Litigation Watchlist",
      "Review Monitoring",
      "Run Litigation Watchlist AI check"
    ],
    "count": 3
  },
  {
    "id": "executive-loss-report",
    "label": "Executive Loss Report",
    "description": "Executive Loss Report action group for Claims Litigation Early Warning.",
    "href": "/executive-loss-report",
    "sourceProjects": [
      "Legal history",
      "Jurisdiction rules"
    ],
    "examples": [
      "Open Executive Loss Report",
      "Review Reporting",
      "Run Executive Loss Report AI check"
    ],
    "count": 3
  }
];
