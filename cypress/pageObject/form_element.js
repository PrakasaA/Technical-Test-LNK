class FormTest
{
threeDotBtn(){return cy.get('button[aria-label="More options"]')}
immersiveReader(){return cy.get('#ImmersiveReaderMenu')}
nameBox(){return cy.get(':nth-child(1) > .-bT-48 > .-a-52 > .-ni-63 > .-_W-62')}
phoneBox(){return cy.get(':nth-child(2) > .-bT-48 > .-a-52 > .-ni-63 > .-_W-62')}
radioBtn(){return cy.get('.-a-77')}
ratingStars(){return cy.get('.-he-87 > div .-fC-106 [aria-label="5 Star"]')}
dateBox(){return cy.get('#DatePicker0-label')}
submitBtn(){return cy.get('button[data-automation-id="submitButton"]')}
}
export default FormTest