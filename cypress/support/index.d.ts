/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        NewUserRegister(): Chainable<any>
        RegisterOnly(): Chainable<any>
        RegisterANDVisitSettingsPage(): Chainable<any>
    }
  }