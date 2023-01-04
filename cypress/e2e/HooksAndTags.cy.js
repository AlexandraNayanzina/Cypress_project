describe("Hooks and Tags", () => { 

    // before
    //after
    //before each
    //after each

    before(() => { 
        cy.log('****   Launch app   ****')

    })

    after(() => { 
        cy.log('****   Closing app   ****')

    })
    beforeEach(() => { 
        cy.log('****   Login   ****')

    })
    afterEach(() => { 
        cy.log('****   Logout   ****')

    })



    it("search", () => { 
        cy.log('****   searching   ****')

    })

    it("advanced search", () => { 
        cy.log('****   advanced searching   ****')

    })

    it("listing Products", () => { 
        cy.log('****   listing products   ****')

    })







})