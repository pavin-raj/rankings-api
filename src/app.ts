import { swaggerUI } from '@hono/swagger-ui'
import createApp from '@/lib/create-app.js'
import index from '@/routes/index.routes.js'
import rankings from '@/routes/rankings/rankings.index.js'
import configureOpenAPI from './lib/configure-open-api.js'

const app = createApp()
configureOpenAPI(app)

const routes = [
  index,
  rankings,
]

routes.forEach((route) => {
  app.route('/', route)
})

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
