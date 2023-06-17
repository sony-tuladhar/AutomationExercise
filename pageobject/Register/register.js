import { faker } from "@faker-js/faker";

function GetUrl() {
  return Cypress.env("baseurl");
}

export function VisitUrl() {
  cy.visit(GetUrl());
  cy.get(".active > :nth-child(1) > h1").should(
    "have.text",
    "AutomationExercise"
  );
}

export function registerAccount() {
  cy.get(".shop-menu > .nav > :nth-child(4) > a").click(); //click on the Login/register
  cy.get(".signup-form > h2").should("have.text", "New User Signup!");
  cy.get('[data-qa="signup-name"]').type(faker.person.firstName()); //enter firstname
  cy.get('[data-qa="signup-email"]').type(faker.internet.email()); //enter email
  cy.get('[data-qa="signup-button"]').click(); //click on signup button
  cy.get(":nth-child(1) > b").should("have.text", "Enter Account Information"); //assertion
  cy.get("#id_gender2").click(); //click on the radio button gender
  cy.get('[data-qa="password"]').type("password"); //enter the password
  cy.get('[data-qa="days"]').select("5"); //select the day
  cy.get('[data-qa="months"]').select("March"); //select month
  cy.get('[data-qa="years"]').select("1997"); //select year
  cy.get("#newsletter").click(); //click on the checkbox Sign up for our newsletter!
  cy.get("#optin").click(); // Click on the checkbox Receive special offers from our partners!
  cy.get("form > .title > b").should("have.text", "Address Information"); //asseertion to check the text
  cy.get('[data-qa="first_name"]').type(faker.person.firstName()); //enter first name
  cy.get('[data-qa="last_name"]').type(faker.person.lastName()); //enter last name
  cy.get('[data-qa="company"]').type(faker.company.name()); //enter company name
  cy.get('[data-qa="address"]').type("Washington"); //enter the address
  cy.get('[data-qa="address2"]').type("101 Independence Avenue, S.E."); //enter address 2
  cy.get('[data-qa="country"]').select("United States"); //select the country
  cy.get('[data-qa="state"]').type("Washington DC"); //enter the state
  cy.get('[data-qa="city"]').type("olympia"); // enter the name of city
  cy.get('[data-qa="zipcode"]').type("6000"); //type the zipcode
  cy.get('[data-qa="mobile_number"]').type("7108220185"); //enter the zipcode
  cy.get('[data-qa="create-account"]').click(); //click on the create account button
  cy.get("b").should("have.text", "Account Created!");
  cy.get('[data-qa="continue-button"]').click() //click on the continue button 
  cy.get('.shop-menu > .nav > :nth-child(4) > a').should('have.text',' Logout')
  cy.get('.shop-menu > .nav > :nth-child(5) > a').click() //click on the delete account 
  cy.get('b').should('have.text','Account Deleted!') //assert the text account deleted
  cy.get('[data-qa="continue-button"]').click() //click on the continue button
}


export function regsiterWithExistingEmail(){
    cy.get(".shop-menu > .nav > :nth-child(4) > a").click(); //click on the Login/register
  cy.get(".signup-form > h2").should("have.text", "New User Signup!");
  cy.get('[data-qa="signup-name"]').type(faker.person.firstName()); //enter firstname
  cy.get('[data-qa="signup-email"]').type('testuser@mailinator.com'); //enter email
  cy.get('[data-qa="signup-button"]').click(); //click on signup button
  cy.get('.signup-form > form > p').should('have.text','Email Address already exist!')
}