
import { compare } from '../guess-checker.service';

describe('Guess Checker Service Tests', async () => {

    test('Test comparison, two letters', () => {
        const GUESS = "ab"
        const ANSWER = "ac"

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
        expect(expectedResults).toEqual(compare(GUESS, ANSWER))
    });

});