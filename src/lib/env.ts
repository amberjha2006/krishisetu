import { z } from 'zod';

const envSchema = z.object({
  LLM_BASE_URL: z.string().url(),
  LLM_API_KEY: z.string(),
  LLM_MODEL: z.string(),
  LLM_VISION_MODEL: z.string(),
  ALLOWED_ORIGINS: z.string().optional(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('❌ Invalid environment variables:', _env.error.format());
  throw new Error('Invalid environment variables');
}

export const env = _env.data;