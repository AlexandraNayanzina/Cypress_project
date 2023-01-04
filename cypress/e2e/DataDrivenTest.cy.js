describe("DataDrivenTest Approach", () => {
  it("DataDrivenTest", () => {
    cy.fixture("invalid_credentials.json").then((data) => {
      cy.visit("https://www.ontariocars.ca");

      data.forEach((userdata) => {
        cy.get("li:nth-child(13) a:nth-child(1)").click();
        cy.wait(3000);
        cy.get("#login-email-inp").type(userdata.username);
        cy.get("#login-pass-inp").type(userdata.password);
        cy.get("button[type='button']").click();
        if (
          userdata.username == "alexandranayanzina@gmail.com" &&
          userdata.password == "Test12345"
        ) {
          cy.get("#menu-username").should("have.text", userdata.expected);

          // Logout
          cy.get("#dd-user-btn").click();
          cy.get(
            "a[href='/umbraco/surface/accountsurface/logout?returnUrl=/']"
          ).click();
        } else {
            cy.get("div[class='s-submit inp-error-marker has-error'] span[class='validationMessage']")
            .should('have.text','The format of the email provided is invalid.')
        }
      });
    });
  });
});
