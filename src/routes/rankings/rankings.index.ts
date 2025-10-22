import { createRouter } from '@/lib/create-app.js'

import * as handlers from './rankings.handlers.js'
import * as routes from './rankings.routes.js'

const router = createRouter().openapi(routes.list, handlers.list)

export default router
