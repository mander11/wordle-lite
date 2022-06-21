
describe('Guess Checker Service Tests', async () => {

    jest.mock('../../repositories/solution.repository', () => ({
        __esModule: true,
        getCurrentSolution: jest.fn(async () => ({ "solutionValue": "abcde" }))
    }));
    const { checkGuess } = require('../guess-checker.service')

    test('Test comparison, two letters', () => {
        const { compare } = require('../guess-checker.service')
        const GUESS = "ab"
        const ANSWER = "ac"
        const results = compare(GUESS, ANSWER)
        const expectedResults = [
            {
                "letter": "a",
                "position": 0,
                "isPresent": true
            },
            {
                "letter": "b",
                "position": 1,
                "isPresent": false
            }
        ]
        expect(expectedResults).toEqual(results)
    })

    test('All letters correct', async () => {
        const results = await checkGuess("abcde");
        const expectedReponse = [
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
        expect(expectedReponse).toEqual(results)
    })
})