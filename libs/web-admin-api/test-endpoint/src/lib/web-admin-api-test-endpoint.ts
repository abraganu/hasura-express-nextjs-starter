import { Express } from 'express'
import { testEndpoint } from './controllers/test-endpoint'

export function addTestingRoutes(app: Express) {
  app.post('/test', testEndpoint)
}
