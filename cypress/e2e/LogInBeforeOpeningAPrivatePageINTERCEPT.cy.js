describe('Log in before opening a private page', () => {
    beforeEach('', () => {
        cy.visit('/#/login')
        cy.intercept('POST', '/api/users/login').as('login')
        // In this case using the intercept is necessary
        cy.NewUserRegister()
        .then(user =>{
            cy.visit('#/login')
            cy.get(':nth-child(1) > .form-control').type(user.email)
            cy.get(':nth-child(2) > .form-control').type(user.password)
            cy.get('.btn').should('contain.text', 'Sign in').click()
            cy.wait(2000)
            });
                cy.wait('@login')
        cy.visit('/#/settings')
    });
    it('should be something', () => {     
    });
});