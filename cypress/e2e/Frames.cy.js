import 'cypress-iframe'
describe("Hande iframe", () => { 

    it.skip("Approach1", () => { 
        cy.visit("https://the-internet.herokuapp.com/iframe")

        const iframe = cy.get("#mce_0_ifr")
            .its("0.contentDocument.body")
            .should("be.visible")
            .then(cy.wrap);
        
        iframe.clear().type("welcome approach1 {cmd+a}");     
        cy.get("button[title='Bold']").click();
        cy.get("button[title='Italic']").click();

    })

    it.skip("Approach2", () => { 
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.getIframe("#mce_0_ifr").clear().type("welcome approach2 {cmd+a}");

        // const iframe = cy.get("#mce_0_ifr")
        //     .its("0.contentDocument.body")
        //     .should("be.visible")
        //     .then(cy.wrap);
        
        cy.get("button[title='Bold']").click();
        cy.get("button[title='Italic']").click();

    })

    it("Approach3 - using cypress iframe plugin", () => { 
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded("#mce_0_ifr"); //Load the frame
        cy.iframe("#mce_0_ifr").clear().type("welcome approach2 {cmd+a}");  // Getting iframe
        cy.get("button[title='Bold']").click();
        cy.get("button[title='Italic']").click();
    })


})