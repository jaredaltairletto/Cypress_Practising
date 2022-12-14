/// <reference types="cypress" />
describe('Log in before opening a private page', () => {
    beforeEach('', () => {
        cy.visit('/#/login')
        cy.NewUserRegister()
            .then(user => {
                cy.visit('#/login')
                cy.get(':nth-child(1) > .form-control').type(user.email)
                cy.get(':nth-child(2) > .form-control').type(user.password + '{enter}')
                    .then(() => user).as('user1'); // So here i get data by using aliases
                cy.wait(2000) // It will be better to use intercept here but its not critical
            })
        cy.visit('/#/settings')
    });
    it('get data from alias', function () {
        cy.get(':nth-child(2) > .form-control').should('have.value', this.user1.userName)
    });
});
// So here i register the new user and after use the data from registration to log in and looking if the one of UI elements have registered user name