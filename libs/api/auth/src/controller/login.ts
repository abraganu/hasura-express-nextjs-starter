import { Request, Response } from 'express'

export const handleLogin = (req: Request, res: Response) => {
  console.log('inside handle login')
  return res.send({
    accessToken: 'Response from hanldeLogin'
  })
}
