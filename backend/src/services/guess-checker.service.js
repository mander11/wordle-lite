const solutionRepo = require('../repositories/solution.repository')

const compare = (guess, solutionValue) => {
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

const checkGuess = async (guess) => {
    const currentSolution = await solutionRepo.getCurrentSolution();
    return compare(guess, currentSolution.solutionValue);
}

module.exports = { checkGuess, compare }