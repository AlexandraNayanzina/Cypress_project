### 1. Start Cypress in the browser   
``` 
npx cypress open  
```

### 2. Run cypress test suit (headless mode, w/o UI)    
```  
npx cypress run  
```

### 3. Run cypress test suit (headed mode, with UI)    
```
 npx cypress run --headed 
```   

### 4. Run cypress test file    
```
 npx cypress run --spec <file name>  
```

### 5. Run cypress test for specific browser    
```
 npx cypress run --browser <chrome/firefox/...>  
 ```

### 6. Install xpath plugin   
```
 npm install -D cypress-xpath 
 ```

### 7. Install iframe plugin   
```
 -----
 ```

### 8. Install drag and drpo plugin    
```   
npm install --save-dev @4tw/cypress-drag-drop 
```

### 9. Install file uploading plugin  
```  
 npm install --save-dev cypress-file-upload
 ```

### 10. Install mochawesome reporter  
```javascript  
 1) npm i --save-dev cypress-mochawesome-reporter
 2) cypress.config.js:

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
}); 
 3) cypress/support/e2e.js:
import 'cypress-mochawesome-reporter/register';
```

## Structure:  
test suite -> test case ->  test steps  
spec file (.cy.js) -> **describe** block (test suite) -> **it** block (test case) 

## Locators
#id
.class
[attribute='value']

## Locators  
Add the line to the support/commands.js
/// <reference  types="Cypress" />
