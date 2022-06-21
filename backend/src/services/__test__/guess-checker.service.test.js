import { compare } from '../guess-checker.service'

describe('Analyze letters of guess', async () => {
  test('Two letter word, one letter not present', () => {
    const GUESS_ONE_LETTER_NOT_PRESENT = 'ab'
    const ANSWER = 'ac'

    const expectedResults = [
      {
        letter: 'a',
        position: 0,
        isPresent: true
      },
      {
        letter: 'b',
        position: 1,
        isPresent: false
      }
    ]

    const actualResults = compare(GUESS_ONE_LETTER_NOT_PRESENT, ANSWER)

    expect(expectedResults).toEqual(actualResults)
  })
})
