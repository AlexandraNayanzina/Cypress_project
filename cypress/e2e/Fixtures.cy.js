describe("Fixtures in cypress", () => {

    //Direct access
    it.skip("Fixture demo test - direct access", () => {
        cy.visit('https://www.ontariocars.ca')
        cy.fixture('credentials.json').then((data) => { 
            cy.get('li:nth-child(13) a:nth-child(1)').click()
            cy.get('#login-email-inp').type(data.username)
            cy.wait(2000)
            cy.get('#login-pass-inp').type(data.password)
            cy.get("button[type='button']").click()
            cy.get('#menu-username').should('have.text', data.expected)

        })
    })


    // Access through Hook - for multiple it blocks
    let userdata;
    before(() => {
        cy.fixture('credentials.json').then((data) => {
            userdata = data;
        })
    })

    it("Fixture demo test - through Hook - for multiple it blocks", () => {

        cy.visit('https://www.ontariocars.ca')
        cy.get('li:nth-child(13) a:nth-child(1)').click()
        cy.wait(3000)
        cy.get('#login-email-inp').type(userdata.username) 
        cy.get('#login-pass-inp').type(userdata.password)
        cy.get("button[type='button']").click()
        cy.get('#menu-username').should('have.text', userdata.expected)

    })

})