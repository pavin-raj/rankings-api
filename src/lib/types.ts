import type { OpenAPIHono, RouteConfig, RouteHandler, z } from '@hono/zod-openapi'
import type { ValidationTargets } from 'hono'
import type { PinoLogger } from 'hono-pino'
import type { ZodError } from 'zod'

export interface AppBindings {
  Variables: {
    logger: PinoLogger
  }
}

export interface FailedSchemaResponse {
  target: keyof ValidationTargets
  success: false
  error: ZodError
}

export type ZodSchema = z.ZodUnion | z.ZodObject | z.ZodArray<z.ZodObject>

export type AppOpenAPI = OpenAPIHono<AppBindings>

export type AppRouteHandler<R extends RouteConfig> = RouteHandler<R, AppBindings>
