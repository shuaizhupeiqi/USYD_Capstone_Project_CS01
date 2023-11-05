describe('My More Page', () => {
  it('Should load the More page', () => {
    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/AboutPage');  
    cy.contains('About Heat Stress Scale (HSS)').should('be.visible'); 
  });

  it('Should navigate to the Introduction page on button click', () => {
    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/AboutPage'); 
    cy.contains('Introduction').click();
// Wait for the page to load (optional, as needed)
    cy.wait(1000); // wait 1000 milliseconds
    cy.contains('Heat Stress Scale').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/USYD_Capstone_Project_CS01/IntroductionPage');
  });
  it('Should navigate to the Setting page on button click', () => {
    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/AboutPage'); 
    cy.contains('Setting').click();
    cy.contains('Setting your and').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/USYD_Capstone_Project_CS01/setpage');
  });


  it('Should navigate to the Homepage page on button click', () => {

    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/AboutPage'); 
    cy.contains('Home').click();
    cy.contains('Current heat stress').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/USYD_Capstone_Project_CS01/HomePage');
  });

// You can continue to add more test cases...
});
