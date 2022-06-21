// describe('happy path', () => {
//   it('success with one guess', () => {

//     cy.intercept('POST', '/api/guess', { fixture: 'successful_answer.json'}).as('submitAnswer')

//     cy.visit('http://localhost:1234')

//     cy.get('input').type('right-answer')
//     cy.get('form').submit()

//     cy.wait(['@submitAnswer'])

//     cy.get('h3').should('contain', 'Nice!')

//   })

//   it('failure with one guess', () => {
//     cy.intercept('POST', '/api/guess', { fixture: 'failure_answer.json'}).as('submitAnswer')

//     cy.visit('http://localhost:1234')

//     cy.get('input').type('wrong-answer')
//     cy.get('form').submit()

//     cy.wait(['@submitAnswer'])

//     cy.get('h3').should('contain', 'Oh... roasted...  Try again if you dare!')
//   })
// })