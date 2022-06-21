describe('happy path', () => {
  it('success with one guess', () => {

    // cy.intercept('POST', '/api/guess', { fixture: 'successful_answer.json'}).as('submitAnswer')

    cy.visit('http://localhost:1234')

    // cy.get('input').type('foobar').submit()

    // cy.wait(['@submitAnswer'])

    // cy.get('h3').should('contain', 'Nice!')


  })
})