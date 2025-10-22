import { createRoute } from '@hono/zod-openapi'
import { z } from 'zod'
import { createRouter } from '@/lib/create-app.js'
import { createMessageObjectSchema, jsonContent } from '@/utils/zod-utils.js'

const router = createRouter().openapi(createRoute({
  tags: ['Index'],
  method: 'get',
  path: '/',
  responses: {
    200: jsonContent(createMessageObjectSchema(), 'Tasks API index'),
  },
}), (c) => {
  return c.json({
    message: 'Tasks API',
    justkidding: true,
  }, 200)
})

export default router
