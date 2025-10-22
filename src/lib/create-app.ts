import type { AppBindings, FailedSchemaResponse } from './types.js'
import { OpenAPIHono } from '@hono/zod-openapi'
import { pinoLogger } from '@/middlewares/pino-logger.js'



function formatZodErrors(result: FailedSchemaResponse): Error {
  throw new Error(`${result} Function not implemented.`)
}


export function createRouter() {
  return new OpenAPIHono<AppBindings>({ strict: false, defaultHook: (result, c) => {
    if (!result.success) {
      return c.json(
        {
          ok: false,
          errors: formatZodErrors(result),
          source: 'custom_error_handler',
        },
        422,
      )
    }
  } })
}

export default function createApp(): OpenAPIHono<AppBindings> {
  const app = createRouter()
  app.use(pinoLogger())
  return app
}



