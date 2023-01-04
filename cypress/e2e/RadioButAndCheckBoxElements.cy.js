describe("Interacting with UI elements", () => { 
    
    it("Radio Buttons", () => { 
        
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        // Visibility of radio buttons
        cy.get("input#female").should('be.visible')
        cy.get("input#male").should("be.visible")

        // Selecting radio button
        cy.get("input#female").check().should("be.checked")
        cy.get("input#male").should("not.be.checked")

    })

    it("Check Box", () => { 
        
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        // Visibility 
        cy.get("input#monday").should("be.visible")

        // Check the 
        cy.get("input#monday").check().should("be.checked")

        //Uncheck check box
        cy.get("input#monday").uncheck().should("not.be.checked")

        //Check a few check boxes

        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")
        cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")


        //Check only first/last check box

        cy.get("input.form-check-input[type='checkbox']").first().check().should("be.checked")
        cy.get("input.form-check-input[type='checkbox']").last().check().should("be.checked")




    })





})