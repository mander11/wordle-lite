describe('Results shown by letter', () => {

    function assertLetterBy(attributes) {
        cy.get(`div[id="letter-${attributes.position}"]`)
            .should('contain', attributes.value)
            .and('have.class', attributes.htmlClass)
    }

    it('should provide letter feedback for guess of ffz when answer is foo', () => {

        cy.intercept('POST', '/api/guess/v2', { fixture: 'result_by_letter.json'}).as('resultByLetter')

        cy.visit('http://localhost:1234')
        cy.get('input').type('foz')
        cy.get('form').submit()
    
        cy.wait(['@resultByLetter'])
    
        assertLetterBy({position:0, value:'f', htmlClass:'letter-correct'})
        assertLetterBy({position:1, value:'f', htmlClass:'letter-exists'})
        assertLetterBy({position:2, value:'z', htmlClass:'letter-wrong'})
    })
    
})


