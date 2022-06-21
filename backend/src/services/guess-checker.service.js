const solutionRepo = require('../repositories/solution.repository')

const checkGuess = async (guess) => {
    const currentSolution = await solutionRepo.getCurrentSolution();
    console.log("did we successfully log the mock????")
    console.log(currentSolution.solutionValue);

    const dummyResponse = [
        {
            "letter": "a",
            "position": 0,
            "isPresent": true
        },
        {
            "letter": "b",
            "position": 1,
            "isPresent": true
        },
        {
            "letter": "c",
            "position": 2,
            "isPresent": true
        },
        {
            "letter": "d",
            "position": 3,
            "isPresent": true
        },
        {
            "letter": "e",
            "position": 4,
            "isPresent": true
        }
    ];
    return dummyResponse;
}

module.exports = { checkGuess }