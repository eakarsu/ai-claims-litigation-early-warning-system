# Governed claims operations

`/api/governed-claims` is authoritative for the narrow claim journey from intake through coverage, evidence, reserve, adjudication, payment, appeal, subrogation, and closure. Signed gateway assertions scope actor, tenant, role, and permission. Fraud signals and AI output are evidence only; licensed adjusters make consequential decisions and cannot approve claims they created.

Install dependencies explicitly, configure `.env.example`, run `./start.sh check`, back up PostgreSQL, then run `ALLOW_SCHEMA_MIGRATION=1 ./start.sh migrate`. Startup never installs, seeds, resets, creates schema, edits secrets, or kills ports. Rollback deploys prior code with additive tables retained; restore only after claim/payment reconciliation.

Policy, document, payment, fraud, external-claims, and notification adapters require stable IDs/versions, freshness, payload hashes, replay-safe commands, typed receipts, bounded retries, and dead-letter reconciliation. Preserve immutable case history, legal holds, explanation evidence, appeal records, reserve overrides, and payment/subrogation receipts.

Carrier authorization, licensed-adjuster staffing, jurisdiction rule approval, provider credentials, payment certification, legal review, and historical-secret rotation are external gates and are not asserted here.
