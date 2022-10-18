/// <reference types = "cypress" />

describe('Check About Menu', () => {

    it('Visit The Website', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('.login_logo').should('be.visible')
    })

    it('Should fill username', () => {
        cy.get('#user-name').clear()
        cy.get('#user-name').type('standard_user')
    })
    it('Should fill password', () => {
        cy.get('#password').clear()
        cy.get('#password').type('secret_sauce')
    })
    it('Click LOGIN button', () => {
        cy.get('#login-button').click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
    })
    it('Navigate to Open Menu', () => {
        cy.get('#react-burger-menu-btn').click()
    })
    it('Check About Menus', () => {
        cy.get('#about_sidebar_link').should('contain.text','About')
    })
})