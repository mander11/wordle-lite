import { createSolutionToBe, v2guess } from './utils/test-api-calls'

describe('Better feedback by letter', () => {

    test('when guess letters have mixed results', async () => {
        const WORDLE = 'abcde'
        const GUESS = 'aacdf'

        await createSolutionToBe(WORDLE)

        const expectedReponse = [
            {
                "letter": "a",
                "position": 0,
                "isPresent": true,
                "correctPosition": true
            },
            {
                "letter": "a",
                "position": 1,
                "isPresent": true,
                "correctPosition": false
            },
            {
                "letter": "c",
                "position": 2,
                "isPresent": true,
                "correctPosition": true
            },
            {
                "letter": "d",
                "position": 3,
                "isPresent": true,
                "correctPosition": true
            },
            {
                "letter": "f",
                "position": 4,
                "isPresent": false,
                "correctPosition": false
            }
        ];

        await v2guess(GUESS, expectedReponse)
    })
})