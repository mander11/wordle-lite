import { getCurrentSolution } from '../repositories/solution.repository'

export const compare = (guess, solutionValue) => {
  const comparison = []
  guess.split('').forEach(letter => {
    const letterResult = {
      letter: letter,
      isPresent: solutionValue.includes(letter)
    }
    comparison.push(letterResult)
  })
  return comparison
}

export const checkGuess = async guess => {
  const currentSolution = await getCurrentSolution()
  return compare(guess, currentSolution.solutionValue)
}
