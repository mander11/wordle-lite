import { Router } from 'express'
import { post, postv2 } from '../controllers/guess.controller'

const guessRouter = Router()

guessRouter.post('/', post)
guessRouter.post('/v2', postv2)

export default guessRouter
