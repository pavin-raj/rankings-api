import createApp from '@/lib/create-app.js'
import categoryRoutes from '@/routes/rankings/category.js'

const sportRoutes = createApp()

sportRoutes.route('/:category', categoryRoutes)

export default sportRoutes
