export function goToProductPage() {
  cy.get(".shop-menu > .nav > :nth-child(2) > a").click(); //click on the product
  cy.get(".title").should("have.text", "All Products"); //asert all product text
}

export function viewProductDetailAndAddToCart() {
  cy.get(
    ":nth-child(3) > .product-image-wrapper > .choose > .nav > li > a"
  ).click(); //View Specific Product
  cy.get(":nth-child(5) > .btn").click(); //click on add to cart
  cy.get(".modal-title").should("have.text", "Added!");
  cy.get(".modal-footer > .btn").click(); //click on continue shopping
}

export function searchProduct() {
  cy.get("#search_product").type("Men Tshirt"); //type in the dearch field
  cy.get("#submit_search").click(); //click on the search icon
  cy.get(".productinfo > p").should("have.text", "Men Tshirt");
}
