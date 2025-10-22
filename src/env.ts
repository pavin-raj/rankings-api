/* eslint-disable node/prefer-global/process */
/* eslint-disable node/no-process-env */
import type {ZodError} from 'zod';
import { config } from 'dotenv'
import { expand } from 'dotenv-expand'
import { z  } from 'zod'

expand(config())

export const EnvSchema = z.object({
  PORT: z.coerce.number().default(9999),
  NODE_ENV: z.string().default('development'),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']),
})

export type ENV_TYPE = z.infer<typeof EnvSchema>

// eslint-disable-next-line import/no-mutable-exports
let env: ENV_TYPE | undefined;

try {
  env = EnvSchema.parse(process.env)
}
catch (e) {
  const error = e as ZodError;
  console.error('❌ Invalid environment variables:', error.flatten().fieldErrors)
  process.exit(1);
}

export default env;
