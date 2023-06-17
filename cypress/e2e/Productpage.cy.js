import * as RegisterPage from "../../pageobject/Register/register"
 import * as ProductPage from "../../pageobject/Products/product"



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


