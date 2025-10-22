import type { ListRoute } from './rankings.routes.js'
import type { AppRouteHandler } from '@/lib/types.js'

export const list: AppRouteHandler<ListRoute> = (c) => {
  return c.json([
    {
      position: 1,
      country: 'USA',
      zone_rank: 1,
      points: 845.8,
      change: '0',
    },
    {
      position: 2,
      country: 'Germany',
      zone_rank: 1,
      points: 765.9,
      change: '+1',
    },
    {
      position: 3,
      country: 'Serbia',
      zone_rank: 2,
      points: 761.8,
      change: '-1',
    },
  ])
}
