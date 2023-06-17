import * as RegisterPage from "../../pageobject/Register/register"

 import * as Categorysection from "../../pageobject/Category/category"

describe("Verify the category Section",()=>{
    it ("View  Category Products", () => {
        RegisterPage.VisitUrl()
      Categorysection.viewCategoryProducts()
    })
})
