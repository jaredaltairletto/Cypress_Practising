/// <reference types="cypress" />
const { faker } = require('@faker-js/faker')

describe('', () => {
    it('sign up page', () => {
        cy.visit('/#/register')
    });
    const random = Math.random().toString().slice(2, 4);
    const userName = faker.internet.userName()+random
    it('username', function() {
        cy.get('[placeholder="Username"]').type(userName).then(response => ({...userName}))
    })
    const email = userName+'@mail.com'
    it('email', () => {
        cy.get('[placeholder="Email"]').type(email).then(response => ({...email}))
    })
    const password = userName
    it('password', () => {
        cy.intercept('POST', 'https://api.realworld.io/api/users').as('waiting')
        cy.get('[placeholder="Password"]').type(password + '{enter}').then(response => ({...password}))
        cy.wait('@waiting')
    })
    it('registered user is liged in', () => {
        cy.visit('/#/login')
    });
    it('RegisteredEmail', () => {
        cy.get('[placeholder="Email"]').type(email)
    });
    it('RegisteredPassword', () => {
        cy.get('[placeholder="Password"]').type(password+'{enter}')
    });
})
