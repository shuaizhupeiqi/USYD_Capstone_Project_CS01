// cypress/e2e/my_test.spec.js

describe('My Home Page', () => {
  it('Should load the Home page with path /HomePage', () => {
    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/HomePage');  
    cy.contains('Current heat').should('be.visible'); 
  });

  it('Should navigate to the Introduction page on button click', () => {
    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/HomePage'); 
    cy.contains('Introduction').click();
    cy.contains('Heat Stress Scale').should('be.visible');
// Assert that the URL has changed to the expected URL
    cy.url().should('eq', 'http://localhost:3000/USYD_Capstone_Project_CS01/IntroductionPage');
  });

  it('Should navigate to the Setting page on button click', () => {
    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/HomePage'); 
    cy.contains('Setting').click();
    cy.contains('Setting your and').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/USYD_Capstone_Project_CS01/setpage');
  });

  it('Should navigate to the About page on button click', () => {
    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/HomePage'); 
    cy.contains('About').click();
    cy.contains('Definition and aim').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/USYD_Capstone_Project_CS01/AboutPage');
  });

  // it('Should navigate to Personalise HSS Risk', () => {
  //   cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/HomePage'); 
  //   cy.contains('Personalise HSS Risk').click();
  //   cy.contains('PERSONALIZE YOUR SETTING').should('be.visible');

  // });

});
