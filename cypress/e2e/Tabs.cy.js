Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
  

describe("Handling the case when the page is opening in new tab", () => { 
    
    it("Approach1 - removing the  'target' attribute", () => { 
        cy.visit("https://www.torontopearson.com/en")
        cy.get("a[rel='noopener noreferrer']").invoke("removeAttr", "target").click()
        cy.url().should("include", "https://reservations.torontopearson.com/TorontoBooking")
        cy.wait(5000)
        cy.go('back')
    })

    it("Approach2 - capturing the url and opening it on the same tab", () => {

        cy.visit("https://www.torontopearson.com/en")
        cy.get("a[rel='noopener noreferrer']").then((e) => { 
            let url = e.prop('href');
            cy.visit(url);
        })
        cy.url().should("include", "https://reservations.torontopearson.com/TorontoBooking")
        cy.wait(5000)
        cy.go('back')
    })

})