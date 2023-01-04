describe('CSSSelectors', () => {

    it('css_locators', () => { 

        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        
        cy.get(".vector-search-box-input").type("Christmas")
        
        cy.get("#searchButton").click()
        
        cy.get(".mw-page-title-main").contains("Christmas123") //Assertion



    })
 
    
})