export function LoginToSysyem(){
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.login-form > h2').should('have.text','Login to your account')
     const useremail = Cypress.env("email"); //call the user name and password form environment
    const userpassword = Cypress.env("password");
    cy.get('[data-qa="login-email"]').type(useremail)
    cy.get('[data-qa="login-password"]').type(userpassword)
    cy.get('[data-qa="login-button"]').click()
    cy.get('b').should('have.text','TestUser')
}


export function loginWithInvalidemailPassword(){
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.login-form > h2').should('have.text','Login to your account')
    cy.get('[data-qa="login-email"]').type('abc@mailinator.com')
    cy.get('[data-qa="login-password"]').type('admin123')
    cy.get('[data-qa="login-button"]').click()
    cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
}