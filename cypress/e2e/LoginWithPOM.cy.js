import Login from "../PageObjects/LoginPage.js";
import LoginTwo from "../PageObjects/LoginPage2.js";

describe("Page object Model", () => {
  it("Login test - POM approach1", () => {
    cy.visit("https://www.ontariocars.ca/");
    cy.get("li:nth-child(13) a:nth-child(1)").click();
    cy.wait(2000);

    const ln = new Login();
    ln.setUserName("snp.alextest@gmail.com");
    ln.setPassword("testtest000");
    ln.clickSubmit();
    ln.verifyLogin();
  });

  it("Login test - POM approach2", () => {
    cy.visit("https://www.ontariocars.ca/");
    cy.get("li:nth-child(13) a:nth-child(1)").click();
    cy.wait(2000);

    const ln = new LoginTwo();
    ln.setUserName("snp.alextest@gmail.com");
    ln.setPassword("testtest000");
    ln.clickSubmit();
    ln.verifyLogin();
  });

  it.only("Login test - POM with fixture", () => {
    cy.visit("https://www.ontariocars.ca/");
    cy.get("li:nth-child(13) a:nth-child(1)").click();
    cy.wait(2000);

    cy.fixture("credentialsPOMexample.json").then((data) => {
      const ln = new LoginTwo();
      ln.setUserName(data.username);
      ln.setPassword(data.password);
      ln.clickSubmit();
      ln.verifyLogin(data.expected);
    });
  });
});
