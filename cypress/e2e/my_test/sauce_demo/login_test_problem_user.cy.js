/// <reference types="cypress" />

describe('Login Test Using username : problem_user', () => {
    
    it('Visit The Website', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'www.saucedemo.com')
    })
    it('Should feel Username', () => {
        cy.get('[data-test="username"]').type('problem_user')
    })
    it('Should feel Password', () => {
        cy.get('[data-test="password"]').type('secret_sauce')
    })
    it('Click Login Button', () => {
        cy.get('[data-test="login-button"]').click()
    })
    it('Logout User', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
        cy.get('h4').should('contain.text', 'Accepted usernames are:')
    })
})