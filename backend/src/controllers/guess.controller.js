import { getCurrentSolution } from '../services/solution.service'

export const post = async (req, res) => {
  let guess = req.body.guessName

  const currentSolution = await getCurrentSolution()
  let isGuessCorrect = guess === currentSolution.solutionValue
  return res.send({ isGuessCorrect })
}
