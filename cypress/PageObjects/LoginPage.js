class Login {
  setUserName(username) {
    cy.get("#login-email-inp").type(username);
  }

  setPassword(password) {
    cy.get("#login-pass-inp").type(password);
  }

  clickSubmit() {
    cy.get("button[type='button']").click();
  }

  verifyLogin() {
    cy.get("#menu-username").should("have.text", "Alex Test ");
  }
}

export default Login;
