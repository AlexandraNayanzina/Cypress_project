Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe("Assertion examples Implicit(should/and); Explicit(expect/assert)", () => { 

    it("Implicit assertion with <should>", () => { 

        cy.visit("https://homestars.com/")

        // Implicit assertions: should, and

        cy.url().should('include', 'homestars')
        .should('eq', 'https://homestars.com/')
        .should('contain','home')

    })

    it("Implicit assertion with <and>", () => { 

        cy.visit("https://homestars.com/")

        // Implicit assertions: should, and

        cy.url().should('include', 'homestars')
        .and('eq', 'https://homestars.com/')
        .and('contain', 'home')
        .and('not.include','swsgfsr')

    })

    it("Implicit assertion- Verify that title - positive", () => { 

        cy.visit("https://homestars.com/")
        cy.title('include', 'HomeStars')
        .and('contain','Home')
    })

    it("Implicit assertion - Verify logo on the Home page", () => { 

        cy.visit("https://homestars.com/")
        cy.get('.sc-cvbbAY').should('be.visible', 'Home')
        .and('exist','Home')
    })

    it("Implicit assertion - Verify the number of link on the Home page", () => { 

        cy.visit("https://homestars.com/")
        cy.xpath('//a').should('have.length','59')
    })


    it("Implicit assertion - Verify the input field", () => { 

        cy.visit("https://en.wikipedia.org/wiki/Main_Page")
        cy.xpath("//input[@id='searchInput']").type("cypress")
        cy.xpath("//input[@id='searchInput']").should("have.value","cypress")

    })

    it("Implicit assertion - Verify the input field", () => { 

        cy.visit("https://en.wikipedia.org/wiki/Main_Page")
        cy.xpath("//input[@id='searchInput']").type("cypress")
        cy.xpath("//input[@id='searchInput']").should("have.value","cypress")

    })

    it("Explicit assertion", () => { 
        cy.visit("https://www.ontariocars.ca")
        cy.xpath("//ul[@class='navbar-nav-menu']//a[normalize-space()='Sign In']").click()
        cy.xpath("//input[@id='login-email-inp']").type("alexandranayanzina@gmail.com")
        cy.xpath("//input[@id='login-pass-inp']").type("Test12345")
        cy.xpath("//button[normalize-space()='Login']").click()

        let expected_name = 'Alexandra Nayanzina '

        cy.xpath("//span[@id='menu-username']").then((x) => { 
            let act_name = x.text()

            // BDD Style
            expect(act_name).to.equal(expected_name)

            //TDD Style

            assert.equal(act_name, expected_name)
            
        })
    })
})