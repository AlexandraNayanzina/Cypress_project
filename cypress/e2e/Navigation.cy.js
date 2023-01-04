describe("Navigation with cypress", () => { 

    it("Navigation", () => { 

        cy.visit('https://demo.opencart.com/');
        cy.title().should('eq', 'Your Store')
        cy.get("li:nth-child(7) a:nth-child(1)").click();
        cy.get("div[id='content'] h2").should('have.text', 'Cameras');
        
        cy.go('back'); //go to Home page
        cy.title().should('eq', 'Your Store')
        
        cy.go('forward'); // go to the Camera's page again
        cy.get("div[id='content'] h2").should('have.text', 'Cameras');
        
        cy.go(-1); // go to Home page
        cy.title().should('eq', 'Your Store')
        
        cy.go(1); //go to Camera's page
        cy.get("div[id='content'] h2").should('have.text', 'Cameras');
        
        cy.reload(); //Reloading the page

    })



})