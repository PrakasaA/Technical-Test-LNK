/// <reference types="cypress"/>
import FormTest from "../pageObject/form_element"
let Form=new FormTest
describe('E2E Test Negatif',()=>{
    beforeEach('Visit Url',()=>{
        cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
    })

    it('Submit Without Data',()=>{
        Form.submitBtn().click()

        // Assertion
        cy.get('.-sf-47').should('be.visible')
        cy.get('.-sf-47').should('contain','This question is required.')
        cy.get('.--Y-230').should('contain','5 question(s) need to be completed')
        cy.wait(2000)
    })

    it('Submit With Invalid Data',()=>{
        // Full Name
        Form.nameBox().type('123432') 
        // Phone Number
        Form.phoneBox().type('prakasa')
        // Affordable or expensive
        Form.radioBtn().contains('Affordable').click()
        // Rating
        Form.ratingStars().click()
        // Date
        Form.dateBox().click()
        cy.get('.ms-FocusZone tbody button[aria-label="21, February, 2024"]').click({force:true})
        // Submit
        Form.submitBtn().click()

        // Assertion
        cy.get('.-sf-47').should('be.visible')
    })
})