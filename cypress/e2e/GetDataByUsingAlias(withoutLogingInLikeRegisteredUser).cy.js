
const { generateNum } = require("../support/MathRandom+Faker");

describe('', () => {
    it('sign up page', () => {
        cy.visit('/#/register')
    });
        const {userName, email, password} = generateNum()
    it('username', function() {
        cy.get('[placeholder="Username"]').type(userName).then(() => userName).as('user1')
    })
    it('email', () => {
        cy.get('[placeholder="Email"]').type(email)
    })
    it('password', () => {
        cy.intercept('POST', 'https://api.realworld.io/api/users').as('Loged')
        cy.get('[placeholder="Password"]').type(password + '{enter}')
        cy.wait('@Loged')
        cy.visit('#/settings')
    })
    it('get data from alias', function() {
        cy.get(':nth-child(2) > .form-control').should('have.value', this.user1)
    });
})