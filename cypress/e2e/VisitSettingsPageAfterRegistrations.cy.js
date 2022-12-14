/// <reference types="cypress" />

describe('settings page', () => {
    beforeEach('', () => {  
    cy.RegisterOnly()
    cy.visit('/#/settings')
    // So i add the custom with this step and named it "RegisterANDVisitSettingsPage"
    });
    it('SettingsPageURLConfirmation', () => {
        cy.url('/#/settings').should('exist')
    });
});