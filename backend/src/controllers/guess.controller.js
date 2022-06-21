import { getCurrentSolution } from '../repositories/solution.repository'
import { checkGuess } from '../services/guess-checker.service'

export const post = async (req, res) => {
  let guess = req.body.guessName

  const currentSolution = await getCurrentSolution()
  let isGuessCorrect = guess === currentSolution.solutionValue
  return res.send({ isGuessCorrect })
}

export const postv2 = async (req, res) => {
  const dummyResponse = await checkGuess(req.body.guessName);
  return res.send(dummyResponse)
}