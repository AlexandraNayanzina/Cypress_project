
// Click on link using label
// Overwriting existing contains() command
// Reusable custom commands

describe("Custom commands", () => { 

    it("Handling links", () => { 
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLabel('Apple MacBook Pro 13-inch');
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
    })

    it("Login command", () => { 
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLabel('Log in');
        cy.loginapp('snp.alextest@gmail.com', 'TestTest')
        cy.get(".ico-account").should('have.text','My account')

    })

    it.skip("Overwriting existing (type) command", () => { 
        // TBD " Cannot overwite the contains query. Queries cannot be overwritten." 
    })


})