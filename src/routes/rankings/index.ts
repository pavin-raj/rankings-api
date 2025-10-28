import createApp from '@/lib/create-app.js'
import sportRoutes from '@/routes/rankings/sport.js'

const rankingRoutes = createApp()

rankingRoutes.route('/:sport', sportRoutes)

export default rankingRoutes;
