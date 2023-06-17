export function viewCategoryProducts(){
    cy.get('.left-sidebar > :nth-child(1)').should('have.text','Category').wait(3000) //assert the category text
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click() //click on women catgory
    cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click() //click on the first category
    cy.get('.title').should('have.text','Women - Dress Products') //assert the text
    cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click() //click on the men category
    cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click() //click on second category
    cy.get('.title').should('have.text','Men - Jeans Products') //assert the text
}