class LoginTwo {

  txtUserName = "#login-email-inp";
  txtPassword = "#login-pass-inp";
  btnSubmit = "button[type='button']";
  labelMessage = "#menu-username";

  setUserName(username) {
    cy.get(this.txtUserName).type(username);
  }

  setPassword(password) {
    cy.get(this.txtPassword).type(password);
  }

  clickSubmit() {
    cy.get(this.btnSubmit).click();
  }

  verifyLogin() {
    cy.get(this.labelMessage).should("have.text", "Alex Test ");
  }
}

export default LoginTwo;
