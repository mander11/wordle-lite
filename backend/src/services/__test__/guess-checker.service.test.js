import { compare } from '../guess-checker.service'

describe('Analyze letters of guess', async () => {
  test('Three letter word, one letter not present, one letter exact, one letter present but wrong position', () => {
    const GUESS = 'azb'
    const ANSWER = 'abc'

    const expectedResults = [
      {
        letter: 'a',
        position: 0,
        isPresent: true,
        correctPosition: true
      },
      {
        letter: 'z',
        position: 1,
        isPresent: false,
        correctPosition: false
      },
      {
        letter: 'b',
        position: 2,
        isPresent: true,
        correctPosition: false
      }
    ]

    const actualResults = compare(GUESS, ANSWER)

    expect(expectedResults).toEqual(actualResults)
  })
})
