describe("Handle Alerts", () => { 
    
    // JavaScript Alert: Text + "OK" button
    it("1) JS alert", () => { 

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

        cy.on("window:alert", (t) => { 
            expect(t).to.contains("I am a JS Alert")
        })

        // alert window is automatically closed by cypress

        cy.get("#result").should("have.text", "You successfully clicked an alert")
    })

    // Confirmation Alert: Text + "OK"+ "Cancel" buttons
    it("2) JS confirmation alert - 'OK' btn clicked", () => { 

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on("window:confirm", (t) => { 
            expect(t).to.contains("I am a JS Confirm")
        })
        // cypress automatically closes the alert window by clicking on "OK" btn - default
        cy.get("#result").should("have.text", "You clicked: Ok")

    })

    it("3) JS confirmation alert - 'Cancel' btn clicked", () => { 

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on("window:confirm", (t) => { 
            expect(t).to.contains("I am a JS Confirm")
        })
        // close the alert window with 'Cancel' btn
        cy.on("window:confirm",  () => false )
        cy.get("#result").should("have.text", "You clicked: Cancel")
    })
    
    it("4) JS confirmation alert with Promt - text + user input field + 'OK' btn clicked", () => { 

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        // Capturing the window object
        cy.window().then((win) => {            
            cy.stub(win, 'prompt').returns('welcome');
        })
        cy.get("button[onclick='jsPrompt()']").click()

        // Then cypress automatically closes the alert window - 'OK' by default

        cy.get("#result").should("have.text", "You entered: welcome")
    })

    it.skip("5) JS confirmation alert with Promt - text + user input field + 'Cancel' btn clicked", () => { 

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        // Capturing the window object
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome');
        })
        cy.get("button[onclick='jsPrompt()']").click()

        // Chose the 'Cancel' option
        cy.on("window:confirm",  () => false )

        cy.get("#result").should("have.text", "You entered: null")
    })
    
    it("6) Authenticated alert, approach1", () => { 

        cy.visit("https://the-internet.herokuapp.com/basic_auth", {
            auth: {
                username: "admin",
                password: "admin"
            }
        });
        cy.get("div[class='example'] p").should("have.contain", "Congratulations!")
    })

    it("7) Authenticated alert, approach2 - inject credentials to the url", () => { 

        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should("have.contain", "Congratulations!")
    })


})