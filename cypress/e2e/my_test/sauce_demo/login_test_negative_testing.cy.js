/// <reference types="cypress" />

describe('Login Test With username Unregistered', () => {
    
    it('Visit The Website', () => {
        cy.visit('https://www.saucedemo.com')
        cy.url().should('include', 'www.saucedemo.com')
    })
    it('Should feel username', () => {
        cy.get('#user-name').type('unregistered')
    })    
    it('Should fill password', () => {
        cy.get('#password').type('unregistered')
    })
    it('Click Login Button', () => {
        cy.get('#login-button').click()
        cy.get('h3').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    })
})