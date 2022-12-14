/// <reference types="cypress" />
describe('Log in before opening a private page', () => {
    beforeEach('', () => {
        cy.visit('/#/login')
        cy.NewUserRegister()
        .then(user =>{
            cy.visit('#/login')
            cy.get(':nth-child(1) > .form-control').type(user.email)
            cy.get(':nth-child(2) > .form-control').type(user.password)
            cy.get('.btn').should('contain.text', 'Sign in').click()
            cy.wait(2000)
            .then(()=>user).as('user1');
            })
        cy.visit('/#/settings')
    });
    it('get data from alias', function() {
        cy.get('[placeholder="Username"]').should('have.value', this.user1.userName)
    });
});