import * as RegisterPage from "../../pageobject/Register/register"
import * as LoginPage from "../../pageobject/Login/login"
 import * as ProductPage from "../../pageobject/Products/product"
 import * as Categorysection from "../../pageobject/Category/category"

describe("Register the Account",()=>{
    it ("Register the New Account ", () => {
        RegisterPage.VisitUrl()
        RegisterPage.registerAccount()
    })

    it ("Register With Exiting Email ", () => {
        RegisterPage.VisitUrl()
       RegisterPage.regsiterWithExistingEmail()

    })
})

describe("Login with valid and invalid credential",()=>{
    it ("Login the System ", () => {
         RegisterPage.VisitUrl()
         LoginPage.LoginToSysyem()

    })

    it ("Login with Invalid Credential ", () => {
        RegisterPage.VisitUrl()
        LoginPage.loginWithInvalidemailPassword()

   })

})

describe("Verify the Product Page",()=>{
    it ("View All Products ", () => {
         RegisterPage.VisitUrl()
        ProductPage.goToProductPage()
    })

    it ("Search the Products ", () => {
        RegisterPage.VisitUrl()
       ProductPage.goToProductPage()
       ProductPage.searchProduct()
   })

   it ("View detail and add  the Products in cart", () => {
    RegisterPage.VisitUrl()
   ProductPage.goToProductPage()
   ProductPage.viewProductDetailAndAddToCart()
})
})

describe("Verify the category Section",()=>{
    it ("View  Category Products", () => {
        RegisterPage.VisitUrl()
      Categorysection.viewCategoryProducts()
    })
})
