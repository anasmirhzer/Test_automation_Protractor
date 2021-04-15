// Test for Login Page 
var LoginPage = require('../page-objects/login_page') // update to your page object

// Page Object File
describe('Login Page Tests', function () {
    var loginPage
    beforeEach(function () {
        loginPage = new LoginPage()

        // Since this is not an Angular Site
        browser.ignoreSynchronization = true

        // Open URL
        browser.get('file:///Users/amir/GIT/Protractor/superhero/index.html') // update to url
    })
    afterEach(function () {


    })
    fit('should display all Login page elements', function () {

        expect(loginPage.loginTitletxt.isDisplayed()).toBe(true)
        expect(loginPage.loginTitletxt.getText()).toEqual('Welcome. Please log In.')


        expect(loginPage.emailFldLbl.isDisplayed()).toBe(true)
        expect(loginPage.emailFld.isDisplayed()).toBe(true)
        expect(loginPage.emailFld.getText()).toEqual('')

        expect(loginPage.passwordFldLbl.isDisplayed()).toBe(true)
        expect(loginPage.passwordFld.isDisplayed()).toBe(true)
        expect(loginPage.passwordFld.getText()).toEqual('')

        expect(loginPage.rememberCheckbox.isDisplayed()).toBe(true)
        expect(loginPage.rememberCheckLbl.isDisplayed()).toBe(true)
        expect(loginPage.rememberCheckbox.isSelected()).toBe(false)
        

        expect(loginPage.submitBtn.isDisplayed()).toBe(true)

    })
    fit('should display error message when no username or password are entered', function () {
        loginPage.submitBtn.click()

        expect(loginPage.loginAlert.isDisplayed()).toBe(true)
        expect(loginPage.loginAlert.getText()).toEqual('An e-mail and password are required.')

    })
    it('should display error message when no password are entered', function () {


        loginPage.submitBtn.click()

        expect(loginPage.loginAlert.isDisplayed()).toBe(true)
        expect(loginPage.loginAlert.getText()).toEqual('An e-mail and password are required.')

    })
    it('should display error message when no username are entered', function () {


    })
    it('should log user in', function () {


    })
})