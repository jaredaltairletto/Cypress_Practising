/// <reference types="cypress" />
const { generateNum } = require("../support/MathRandom+Faker");
describe('', () => {
    const {userName, email, password} = generateNum()
    it('Registration with using random values from "MathRandom+Faker.js"', () => {
        cy.visit('/')
        cy.get('[href="#register"]').click()
        cy.get('[placeholder="Username"]').type(userName)
        cy.get('[placeholder="Email"]').type(email)
        cy.get('[placeholder="Password"]').type(password+"{enter}") // <- {enter} not always can be used
        // So i add the custom with this step and named it "RegisterOnly"
    });
});