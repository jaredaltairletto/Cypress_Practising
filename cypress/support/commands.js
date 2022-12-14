// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { generateNum } = require("./MathRandom+Faker");

Cypress.Commands.add('NewUserRegister', () => {
    const {userName, email, password} = generateNum() 
        const user = ({userName, email, password})
        cy.visit('#/register')
        cy.get(':nth-child(1) > .form-control').type(userName);
        cy.get(':nth-child(2) > .form-control').type(email);
        cy.get(':nth-child(3) > .form-control').type(password + '{enter}');
        cy.get(':nth-child(3) > .nav-link').should('contain.text', 'Settings').click()
        cy.get('.btn-outline-danger').should('contain.text', 'Or click here to logout').click()
        .then(response => ({...user}))
});

Cypress.Commands.add('RegisterOnly', () => {
    const {userName, email, password} = generateNum() 
    cy.visit('#/register')
    cy.get(':nth-child(1) > .form-control').type(userName);
    cy.get(':nth-child(2) > .form-control').type(email);
    cy.get(':nth-child(3) > .form-control').type(password + '{enter}');
})

Cypress.Commands.add('RegisterANDVisitSettingsPage', () => {
    cy.RegisterOnly()
    cy.visit('/#/settings')
});




 