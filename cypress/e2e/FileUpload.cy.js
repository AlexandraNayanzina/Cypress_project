import ('cypress-file-upload')

describe("File Uploads", () => { 

    it("Single File Upload", () => { 

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('ChristmasCard.png');
        cy.get('#file-submit').click({force:true});
        cy.wait(3000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it("Single File Upload - Rename", () => { 

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'ChristmasCard.png', fileName:'newName.png'});
        cy.get('#file-submit').click({force:true});
        cy.wait(3000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it("Single File Upload - Drag and Drop", () => { 

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('ChristmasCard.png', { subjectType: 'drag-n-drop' })
        cy.get("div[class='dz-preview dz-processing dz-image-preview dz-success dz-complete'] div[class='dz-details'] span")
        .contains('ChristmasCard')
    })

    it("Multiple File Upload", () => { 

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['ChristmasCard.png', 'Screen Shot 2022-12-23 at 2.57.34 PM.png'])
        cy.get("div[class='main'] li:nth-child(1)").should('have.text', 'ChristmasCard.png')
        cy.get("div[class='main'] li:nth-child(2)").should('have.text','Screen Shot 2022-12-23 at 2.57.34 PM.png')
        
    })

    it.only("File Upload - Shadow DOM", () => { 

        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get(".smart-browse-input", { includeShadowDom: true }).attachFile('ChristmasCard.png');
        cy.get('.smart-item-name', {includeShadowDom:true}).should('have.text', 'ChristmasCard.png');
        
    })


})