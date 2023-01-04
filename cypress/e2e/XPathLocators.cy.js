describe('XPathLocators', () => { 

    it('items in nav bar - positive test', () => {

        cy.visit("https://www.chapters.indigo.ca/en-ca/")
        cy.xpath("//ul[@class='top-nav__list']/li").should('have.length', 13)

    })
    
    it('items in nav bar - negative test', () => {

        cy.visit("https://www.chapters.indigo.ca/en-ca/")
        cy.xpath("//ul[@class='top-nav__list']/li").should('have.length', 10)

    })

})