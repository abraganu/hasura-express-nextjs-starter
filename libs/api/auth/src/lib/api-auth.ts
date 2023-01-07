import { Router } from 'express'
import { handleLogin } from '../controller/login';

export function addAuthRoutes(app: Router) {
  app.post('/auth/login', handleLogin)
}
