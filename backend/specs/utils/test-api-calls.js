import request from 'supertest'
import { app } from '../../src/server'

export async function guessIsCorrect(guessName, expectedBool) {
    let response = await request(app)
        .post('/api/guess')
        .send({ guessName: guessName })
    expect(response.body).toEqual({ isGuessCorrect: expectedBool })
}

export async function v2guess(guessName, expectedResponse) {
    let response = await request(app)
        .post('/api/guess/v2')
        .send({ guessName: guessName })
    expect(response.body).toEqual(expectedResponse)
}

export async function updateSolutionToBe(newSolution) {
    let response = await request(app)
        .put('/api/solution')
        .send({ solutionValue: newSolution })
    expect(response.statusCode).toEqual(200)
}

export async function createSolutionToBe(newSolution) {
    let response = await request(app)
        .post('/api/solution')
        .send({ solutionValue: newSolution })
    expect(response.statusCode).toEqual(200)
}