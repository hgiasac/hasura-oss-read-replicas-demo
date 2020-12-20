CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE "public"."users"(
  "id" serial NOT NULL, 
  "name" text NOT NULL, 
  "deleted" boolean NOT NULL DEFAULT false, 
  PRIMARY KEY ("id") 
);
