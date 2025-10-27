import { swaggerUI } from '@hono/swagger-ui'
import createApp from '@/lib/create-app.js'
import rankingRoutes from '@/routes/rankings/index.js'
import configureOpenAPI from './lib/configure-open-api.js'

const app = createApp()
configureOpenAPI(app)

app.route('/rankings', rankingRoutes)

app.use('/swagger', swaggerUI({ url: '/doc' }))

app.notFound(c => c.text(`${c.req.url} not found!`, 404))

app.get('/error', (c) => {
  c.var.logger.info('Wow! a log message!')
  throw new Error('You get what you deserve!')
})

app.onError((err, c) => {
  console.error(`${err.message}`)
  return c.text('You got what you asked for!', 500)
})

export default app
