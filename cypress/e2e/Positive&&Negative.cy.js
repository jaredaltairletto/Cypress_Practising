/// <reference types="cypress" />

const { generateNum } = require("../support/generate_num");

describe('trying to do 200', () => {
    beforeEach( () => {
        cy.visit('/#/register')
    });
    const {userName, email, password} = generateNum()
    it('checking of non registration with existing e-mail', () => {

        cy.get(':nth-child(1) > .form-control').type(userName)
        cy.get(':nth-child(2) > .form-control').type(email)
        cy.get(':nth-child(3) > .form-control').type(password)
        cy.get('.btn').should('contain.text', 'Sign in').click()
        cy.get('.feed-toggle > .nav > :nth-child(1) > .nav-link').should('exist')

    });

    it('checking the imposibility to register with same data', () => {
        cy.get(':nth-child(1) > .form-control').type(userName)
        cy.get(':nth-child(2) > .form-control').type(email)
        cy.get(':nth-child(3) > .form-control').type(password)
        cy.get('.btn').should('contain.text', 'Sign in').click()
        cy.get('.error-messages > :nth-child(1)').should('contain.text', 'email has already been taken')
        
    });
});