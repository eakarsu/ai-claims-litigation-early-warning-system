# AI Claims Litigation Early-Warning System

Runnable Next.js full-stack app for Claims Litigation Early Warning.

## Workflows

- `/claim-risk-intake` - Claim Risk Intake (Intake): Claim facts, policy, damages, claimant profile, jurisdiction, and early risk score.
- `/litigation-propensity` - Litigation Propensity (Prediction): Litigation likelihood, drivers, prior patterns, severity, and confidence.
- `/evidence-gap-review` - Evidence Gap Review (Evidence): Missing photos, statements, estimates, medical records, and investigation gaps.
- `/reserve-risk` - Reserve Risk (Finance): Reserve adequacy, severity movement, comparable claims, and escalation threshold.
- `/jurisdiction-patterns` - Jurisdiction Patterns (Legal): Venue tendencies, counsel patterns, timelines, verdict ranges, and strategy notes.
- `/counsel-assignment` - Counsel Assignment (Legal): Panel counsel options, conflict checks, budget, scope, and assignment status.
- `/settlement-strategy` - Settlement Strategy (Resolution): Demand analysis, negotiation range, evidence posture, and recommended strategy.
- `/adjuster-escalations` - Adjuster Escalations (Operations): Escalation triggers, owner notes, deadlines, and supervisor review.
- `/litigation-watchlist` - Litigation Watchlist (Monitoring): High-risk claims, status changes, new evidence, and action reminders.
- `/executive-loss-report` - Executive Loss Report (Reporting): Portfolio litigation exposure, reserves, trends, hotspots, and recommended actions.

## Local Run

```bash
cd ai-claims-litigation-early-warning-system/frontend
npm run dev
```

Create the first administrator with the explicit BOOTSTRAP_ADMIN_EMAIL,
BOOTSTRAP_ADMIN_PASSWORD, and BOOTSTRAP_ACKNOWLEDGEMENT environment settings.
