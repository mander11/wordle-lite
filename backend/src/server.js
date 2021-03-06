import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import { connect } from './utils/db'
import cors from 'cors'
import solutionRouter from './routers/solution.router'
import guessRouter from './routers/guess.router'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/solution', solutionRouter)
app.use('/api/guess', guessRouter)

export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
