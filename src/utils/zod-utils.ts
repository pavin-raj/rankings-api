import type { ZodSchema } from '@/lib/types.js'
import { z } from '@hono/zod-openapi'

export function jsonContent<T extends ZodSchema>(schema: T, description: string) {
  return {
    content: {
      'application/json': {
        schema,
      },
    },
    description,
  }
}

export function createMessageObjectSchema() {
  return z.object({
    message: z.string(),
    just_kidding: z.boolean().optional(),
  })
}
