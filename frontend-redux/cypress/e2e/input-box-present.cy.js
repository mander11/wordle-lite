export {};

describe('expected starting state', () => {
  it.only('should have input box present', () => {
    cy.visit('http://localhost:3000')

    cy.get('input[id="wordle-input-box"]')
  })
})