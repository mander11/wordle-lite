import { getCurrentSolution } from '../repositories/solution.repository'

export const compare = (guess, solutionValue) => {
    const comparison = []
    const iterate = [...guess].forEach((letter, index) => {
        const letterResult = {
            "letter": letter,
            "position": index,
            "isPresent": solutionValue.includes(letter)
        };
        comparison.push(letterResult)
    });
    return comparison;
}

export const checkGuess = async (guess) => {
    const currentSolution = await getCurrentSolution();
    return compare(guess, currentSolution.solutionValue);
}
