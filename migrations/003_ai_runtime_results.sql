BEGIN;
CREATE TABLE IF NOT EXISTS app_ai_results (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES app_users(id) ON DELETE RESTRICT,
  feature TEXT NOT NULL,
  input JSONB NOT NULL,
  output TEXT NOT NULL,
  model TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS app_ai_results_user_feature_idx ON app_ai_results(user_id, feature, created_at DESC);
COMMIT;
