import { Router } from 'express'
import { post } from '../controllers/guess.controller'

const guessRouter = Router()

guessRouter.post('/', post)

export default guessRouter
