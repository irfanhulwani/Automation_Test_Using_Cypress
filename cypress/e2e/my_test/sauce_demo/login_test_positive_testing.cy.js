/// <reference types="cypress" />

describe('Login Test With user standard_user', () => {
    
    it('Visit The Website', () => {
        cy.visit('https://www.saucedemo.com')
        cy.url().should('include', 'www.saucedemo.com')
    })
    it('Should feel username', () => {
        cy.get('#user-name').type('standard_user')
    })    
    it('Should fill password', () => {
        cy.get('#password').type('secret_sauce')
    })
    it('Click Login Button', () => {
        cy.get('#login-button').click()
    })
    it('Logout user', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })
})