import createApp from '@/lib/create-app.js'

const categoryRoutes = createApp()

categoryRoutes.get('/', (c) => {
  return c.json({ message: `Rankings for category` })
})

export default categoryRoutes
