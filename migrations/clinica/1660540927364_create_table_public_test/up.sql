CREATE TABLE "public"."test" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "test_text" text NOT NULL, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
