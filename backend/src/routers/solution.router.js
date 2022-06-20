import { Router } from 'express'
import { create, update } from '../controllers/solution.controller'

const solutionRouter = Router()

solutionRouter.post('/', create)
solutionRouter.put('/', update)

export default solutionRouter
