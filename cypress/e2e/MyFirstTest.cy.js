
  describe('empty spec', () => {
    it('verify title - positive', () => {
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
    })

    // it('verify title - negative', () => {
    //     cy.visit('https://www.google.com/')
    //     cy.title().should('eq','Google123')
    // })


  })
