import { guessIsCorrect, updateSolutionToBe, createSolutionToBe } from './utils/test-api-calls'

describe('Updating the Wordle Answer', () => {

    test('when wordle answer is updated to be X then a guess of X should be correct', async () => {
        const OLD_WORDLE = 'foo'
        const NEW_WORDLE = 'foobar'

        await createSolutionToBe(OLD_WORDLE)       //Given
        await guessIsCorrect(NEW_WORDLE, false)

        await updateSolutionToBe(NEW_WORDLE)       //When 

        await guessIsCorrect(NEW_WORDLE, true)    //Then
    })
})
