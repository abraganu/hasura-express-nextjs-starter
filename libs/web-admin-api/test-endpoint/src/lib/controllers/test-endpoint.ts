import { Request, Response } from 'express'

export const testEndpoint = (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'Worked'
  })
}
