import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  R2_BUCKET_ENDPOINT: z.string().url(),
  R2_BUCKET_NAME: z.string(),
  R2_ACCESS_KEY_ID: z.string(),
  R2_SECRET_ACCESS_KEY: z.string(),
});

export const env = envSchema.parse(process.env);
