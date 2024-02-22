/// <reference types="cypress"/>
import FormTest from "../pageObject/form_element"
let Form= new FormTest
describe('e2e test',()=>{
    beforeEach('Visit Url',()=>{
        cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
    })
    it('Successfully submit with valid data',()=>{
        // Full Name
        Form.nameBox().type('Arizal Prakasa')
        
        // Phone Number
        Form.phoneBox().type('087722305464')
        
        // Affordable or expensive
        Form.radioBtn().contains('Affordable').click()
        
        // Rating
        Form.ratingStars().click()
        
        // Date
        Form.dateBox().click()
        cy.get('.ms-FocusZone tbody button[aria-label="21, February, 2024"]').click({force:true})
        
        // Assertion
        Form.nameBox().should('contain.value','Arizal Prakasa')
        Form.phoneBox().should('contain.value','087722305464')
        cy.get('.lrp-choice-selected > div > .--F-79 > .-a-80 > .-h_-81').should('be.checked')
        Form.ratingStars().should('have.attr','tabindex','0')
        Form.dateBox().should('contain.value','2/21/2024')

        // Submit
        Form.submitBtn().click()
        cy.get('.text-format-content').should('contain','response')


    })

    it('Success Clear Form',()=>{
        // Full Name
        Form.nameBox().type('Arizal Prakasa')
        
        // Phone Number
        Form.phoneBox().type('087722305464')
        
        // Affordable or expensive
        Form.radioBtn().contains('Affordable').click()
        
        // Rating
        Form.ratingStars().click()
        
        // Date
        Form.dateBox().click()
        cy.get('.ms-FocusZone tbody button[aria-label="21, February, 2024"]').click({force:true})
        
        // Clear Form
        Form.threeDotBtn().click()
        Form.immersiveReader().contains('Clear Form').click()
        cy.get('button[aria-label="Clear Form"]').click()

        // Assertion
        Form.nameBox().should('have.attr','placeholder','Enter your answer')
        Form.phoneBox().should('have.attr','placeholder','Enter your answer')
        cy.get('input[aria-posinset="1"]').should('not.be.checked')
        Form.ratingStars().should('have.attr','tabindex','-1')
        Form.dateBox().should('have.attr','placeholder','Please input date (M/d/yyyy)')
    })
})