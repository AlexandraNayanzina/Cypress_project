describe("Capturing screenshots and videos of the failures", () => {


    it("Capturing Screenshots and videos", () => {
        cy.visit('https://demo.opencart.com/')
        // cy.screenshot("homepage");
        // cy.get("img[title='Your Store']").screenshot('logo');


        // Automatically capture screenshot - when esecute through CLI - command line interface
        cy.get('li:nth-child(7) a:nth-child(1)').click();
        cy.get("div[id='content'] h2").should('have.text','Tablets')

  });
});
