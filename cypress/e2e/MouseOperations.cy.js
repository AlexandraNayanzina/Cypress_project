import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe("", () => { 
    
    it("MouseHover", () => { 
        cy.visit("https://demo.opencart.com/")      
        cy.get(".nav-link.dropdown-toggle[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20']")
            .trigger("mouseover").click()       
        cy.get("div[class='dropdown-menu show'] li:nth-child(1) a:nth-child(1)").should('be.visible')
    })

    it("RightCliack - approach1", () => { 
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
        cy.get('.context-menu-icon-copy > span').should('be.visible')
    })

    it("RightCliack - approach2", () => { 
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        cy.get('.context-menu-icon-copy > span').should('be.visible')
    })

    it("DoubleClick - approach1", () => { 
        cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick')
        cy.get('#runbtn').click();
        cy.frameLoaded('#iframeResult'); //Load the frame element

        // Approach1 - using trigger() method
        cy.iframe('#iframeResult').find("p[ondblclick='myFunction()']").trigger('dblclick');
        cy.iframe('#iframeResult').find("#demo").should('have.text', 'Hello World ');
    })

    it("DoubleClick - approach2", () => { 
        cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick')
        cy.get('#runbtn').click();
        cy.frameLoaded('#iframeResult'); //Load the frame element

        // Approach1 - using dblclick() method method
        cy.iframe('#iframeResult').find("p[ondblclick='myFunction()']").dblclick()
        cy.iframe('#iframeResult').find("#demo").should('have.text', 'Hello World ');
    })

    it("Drag and Drop using plugin", () => { 
        cy.visit('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').drag('#box106', {force:true});

    })
    
    
    it("Scrolling page", () => {
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
        cy.get("img[alt='Flag of Kenya']").scrollIntoView({duration:2000});

    })


})