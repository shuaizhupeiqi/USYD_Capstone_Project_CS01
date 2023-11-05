// cypress/e2e/my_test.spec.js

describe('My setting Page', () => {
  it('Should load the SettingPage with path /SettingPage', () => {
    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/SettingPage');  
    cy.contains('Save').should('be.visible'); 
  });

  it('Should load the SettingPage with path /SettingPage', () => {
    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/setpage');  
    cy.contains('Set data').should('be.visible'); 
  });

  it('Should load the SettingPage with path /SettingPage', () => {
    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/setpage');  
    cy.contains('Set Language').click();
    cy.contains('Change Language').should('be.visible');
  });
  // it('Should load the SettingPage with path /SettingPage', () => {
  //   cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/setpage');  
  //   cy.contains('Set data').click();
  //   cy.contains('PERSONALIZE YOUR').should('be.visible');
  // });
  it('Should load the Homepage ', () => {
    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/setpage');  
    cy.contains('Save and back').click();
    cy.contains('Current heat stress risk').should('be.visible');
  });
  it('Should login/signin ', () => {
    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/setpage');  
    cy.contains('Login/Signin').click();
    cy.contains('Sign in with email').should('be.visible');
  });
//Test jump navigation
  it('Should navigate to the Introduction page on button click', () => {
// Visit the initial page
    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/setpage'); 
    cy.contains('Introduction').click();
    cy.contains('Heat Stress Scale').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/USYD_Capstone_Project_CS01/IntroductionPage');
  });
  it('Should navigate to the About page on button click', () => {

    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/setpage'); 
    cy.contains('About').click();
    cy.contains('Definition and aim').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/USYD_Capstone_Project_CS01/AboutPage');
  });


  it('Should navigate to the Homepage page on button click', () => {

    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/setpage'); 
    cy.contains('Home').click();
    cy.contains('Current heat stress').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/USYD_Capstone_Project_CS01/HomePage');
  });
});
