import { createSolutionToBe, v2guess } from './utils/test-api-calls'

describe('Guess feedback by letter', () => {

    test('when guess letters are all present', async () => {
        const WORDLE = 'abcde'
        const GUESS = 'abcde'

        await createSolutionToBe(WORDLE)

        const expectedReponse = [
            {
                "letter": "a",
                "isPresent": true
            },
            {
                "letter": "b",
                "isPresent": true
            },
            {
                "letter": "c",
                "isPresent": true
            },
            {
                "letter": "d",
                "isPresent": true
            },
            {
                "letter": "e",
                "isPresent": true
            }
        ];

        await v2guess(GUESS, expectedReponse)
    })
})