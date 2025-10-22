import { createRoute } from '@hono/zod-openapi'
import { z } from 'zod'
import { jsonContent } from '@/utils/zod-utils.js'

const tags = ['Rankings']

export const list = createRoute({
  tags,
  method: 'get',
  path: '/fiba/men/world',
  responses: {
    200: jsonContent(
      z.array(z.object({
        position: z.number(),
        country: z.string(),
        zone_rank: z.number(),
        points: z.number(),
        change: z.string(),
      })),
      'FIBA World Ranking Presented by NIKE - Men',
    ),
  },
})

export type ListRoute = typeof list
