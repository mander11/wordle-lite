import { getCurrentSolution } from '../repositories/solution.repository'

export const compare = (guess, solutionValue) => {
  const comparison = []
  guess.split('').forEach((letter, index) => {
    const letterResult = {
      letter: letter,
      position: index,
      isPresent: solutionValue.includes(letter),
      correctPosition: letter === solutionValue[index]
    }
    comparison.push(letterResult)
  })
  return comparison
}

export const checkGuess = async guess => {
  const currentSolution = await getCurrentSolution()
  return compare(guess, currentSolution.solutionValue)
}
