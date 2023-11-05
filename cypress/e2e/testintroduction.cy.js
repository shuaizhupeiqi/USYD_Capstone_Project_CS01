describe('My introduction Page', () => {
  it('Should load the introduction page', () => {
    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/IntroductionPage'); //Access the root directory of the website

// Check if specific text exists on the page
    cy.contains('What is HSS？').should('be.visible');
    cy.get('img[src="/USYD_Capstone_Project_CS01/icons/Setting.webp"]').click(); //Click on the picture
    cy.url().should('include', 'apstone');  // Assert whether a URL contains the expected path
  });
  it('Should navigate to the Homepage page on button click', () => {

    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/IntroductionPage'); 
    cy.contains('Home').click();
    cy.contains('Current heat stress').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/USYD_Capstone_Project_CS01/HomePage');
  });
  it('Should navigate to the Setting page on button click', () => {
    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/IntroductionPage'); 
    cy.contains('Setting').click();
    cy.contains('Setting your and').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/USYD_Capstone_Project_CS01/setpage');
  });


  it('Should navigate to the About page on button click', () => {

    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/IntroductionPage'); 
    cy.contains('About').click();
    cy.contains('Definition and aim').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/USYD_Capstone_Project_CS01/AboutPage');
  });
  it('Should navigate to the About page on button click', () => {

    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/IntroductionPage'); 
    cy.contains('About').click();
    cy.contains('Definition and aim').should('be.visible');
    cy.url().should('eq', 'http://localhost:3000/USYD_Capstone_Project_CS01/AboutPage');
  });

  it('Should navigate to the About page on button click', () => {

    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/IntroductionPage'); 
    cy.contains('Get Started Now').click();
    cy.contains('Current heat stress').should('be.visible');

  });
  it('Should navigate to the About page on button click', () => {

    cy.visit('http://localhost:3000/USYD_Capstone_Project_CS01/IntroductionPage'); 
    cy.contains('Detailed Recommendations').click();
    cy.contains('Keep hydrated by').should('be.visible');

  });

  
});
