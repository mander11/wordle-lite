import { createSolutionToBe, v2guess } from './utils/test-api-calls'

describe('Guess feedback by letter', () => {

    test('when guess letters are all present', async () => {
        const WORDLE = 'abcde'
        const GUESS = 'abcde'

        await createSolutionToBe(WORDLE)

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

        await v2guess(GUESS, expectedReponse)
    })
})