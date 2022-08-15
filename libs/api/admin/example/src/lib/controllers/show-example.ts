import type { Request, Response } from 'express'

export const handleShowExample = async (req: Request, res: Response) => {
 res.status(200).json({
  message: 'Im working'
 })
}
