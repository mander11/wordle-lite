
describe('hello', async () => {

    jest.mock('../../repositories/solution.repository', () => ({
        __esModule: true,
        getCurrentSolution: jest.fn(async () => ({ "solutionValue": "abcde" }))
    }));

    const { getCurrentSolution } = require('../../repositories/solution.repository')
    const { checkGuess } = require('../guess-checker.service')

    test('hey', async () => {
        const x = await checkGuess("something")

        expect(getCurrentSolution).toHaveBeenCalled();
    })
})