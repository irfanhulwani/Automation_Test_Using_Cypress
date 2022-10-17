/// <reference types="cypress" />

describe('Working with inputs', () => {
    it('visit the website', () => {
        cy.visit('https://demo.applitools.com//')
        cy.url().should('include', 'demo.applitools.com')
    });
    
    it('should try to login', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#username').clear()
            cy.get('#username').type(username)

            cy.get('#password').clear()
            cy.get('#password').type(password)
            
            cy.get('a[href="/app.html"]').click()
            
        });
    });
});