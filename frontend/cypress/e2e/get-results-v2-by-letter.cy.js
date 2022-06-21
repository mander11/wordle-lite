describe('Results shown by letter', () => {

    it('should provide letter feedback for guess of foz when answer is foo', () => {
        cy.intercept('POST', '/api/guess/v2', { fixture: 'result_by_letter.json'}).as('resultByLetter')

        cy.visit('http://localhost:1234')
    
        cy.get('input').type('foz')
        cy.get('form').submit()
    
        cy.wait(['@resultByLetter'])
    
        cy.get('div[id="letter-0"]')
            .should('contain', 'f')
            .and('have.class', 'letter-exists')
    
        cy.get('div[id="letter-1"]')
            .should('contain', 'o')
            .and('have.class', 'letter-exists')
    
        cy.get('div[id="letter-2"]')
            .should('contain', 'z')
            .and('have.class', 'letter-wrong')
    })
    
})