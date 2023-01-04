describe("DataDrivenTest Approach", () => {
  it("DataDrivenTest - negative test", () => {
    cy.fixture("invalid_credentials.json").then((data) => {
      cy.visit("https://www.ontariocars.ca");
      cy.get("li:nth-child(13) a:nth-child(1)").click();
      cy.wait(2000);

      data.forEach((userdata) => {
        cy.get("#login-email-inp").type(userdata.username);
        cy.get("#login-pass-inp").type(userdata.password);
        cy.get("button[type='button']").click();
        cy.wait(2000)
        cy.get(
          "div[class='s-submit inp-error-marker has-error'] span[class='validationMessage']"
        ).should("have.text", "The format of the email provided is invalid.");
      });
    });
  });

  it.only("DataDrivenTest - positive test", () => {
    cy.fixture("credentials.json").then((data) => {
      cy.visit("https://www.ontariocars.ca");
      cy.get("li:nth-child(13) a:nth-child(1)").click();
      cy.wait(3000);
      cy.get("#login-email-inp").type(data.username);
      cy.get("#login-pass-inp").type(data.password);
      cy.get("button[type='button']").click();
      cy.get("#menu-username").should("have.text", data.expected);
    });
  });
});
