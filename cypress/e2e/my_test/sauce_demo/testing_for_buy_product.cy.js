/// <reference types="cypress" />

describe('Buy Some Product', () => {
    it.only('Buy Sauce Labs Backpack', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'www.saucedemo.com')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Irfan')
        cy.get('[data-test="lastName"]').type('Hulwani')
        cy.get('[data-test="postalCode"]').type('12345')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('h2').should('contain.text', 'THANK YOU FOR YOUR ORDER')
    })
    
})