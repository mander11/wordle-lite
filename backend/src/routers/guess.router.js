import { Router } from 'express'
import { post, postv2 } from '../controllers/guess.controller'

const guessRouter = Router()

guessRouter.post('/api/guess', post)
guessRouter.post('/api/v2/guess', postv2)

export default guessRouter
