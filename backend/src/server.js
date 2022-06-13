import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import { connect } from './utils/db'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.post('/api/guess', function(req, res) {
  const ANSWER = 'foo'

  let guess = req.body.guessName
  let isGuessCorrect = guess === ANSWER
  console.log(`The current guess is... ${guess}`)
  return res.send({ isGuessCorrect: isGuessCorrect })
})

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
