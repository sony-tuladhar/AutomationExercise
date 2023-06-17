import * as RegisterPage from "../../pageobject/Register/register"
import * as LoginPage from "../../pageobject/Login/login"


describe("Register And Login Page",()=>{
    it ("Register the New Account ", () => {
        RegisterPage.VisitUrl()
        RegisterPage.registerAccount()
    })

    it ("Register With Exiting Email ", () => {
        RegisterPage.VisitUrl()
        RegisterPage.regsiterWithExistingEmail()
    })

    it ("Login with valid Credential ", () => {
         RegisterPage.VisitUrl()
         LoginPage.LoginToSysyem()

    })

    
    it ("Login with Invalid Credential ", () => {
        RegisterPage.VisitUrl()
        LoginPage.loginWithInvalidemailPassword()

   })

})
