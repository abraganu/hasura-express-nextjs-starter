import { Express } from 'express'
import { handleShowExample } from './controllers/show-example'

export const addExampleRoutes = (app: Express) => {
  app.post('/api/example', handleShowExample)
}
