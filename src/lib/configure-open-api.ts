import type { AppOpenAPI } from './types.js'
import { Scalar } from '@scalar/hono-api-reference'
import packageJSON from '../../package.json'

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc('/doc', {
    openapi: '3.0.0',
    info: {
      version: packageJSON.version,
      title: 'Rankings API',
    },
  })

  // Use the middleware to serve the Scalar API Reference at /scalar
  app.get('/scalar', Scalar(
    { theme: 'alternate', layout: 'classic', defaultHttpClient: {
      targetKey: 'node',
      clientKey: 'fetch',
    }, url: '/doc' },
  ))
}
