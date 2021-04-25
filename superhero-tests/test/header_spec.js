var HeaderPage = require('../page-objects/header_page')
var LoginPage = require('../page-objects/login_page') 

describe('header page', function(){
    var loginPage
    var headerPage 

    

    beforeEach(function(){

        headerPage = new HeaderPage()
        loginPage = new LoginPage()

        // Since this is not an Angular Site
        browser.ignoreSynchronization = true

        // Open URL
        browser.get('file:///Users/amir/GIT/Protractor/superhero/index.html') // update to url
    


    })
afterEach(function(){
    


})

it ('Should contain all header elements', function(){
    loginPage.emailFld.sendKeys('testinganas@toto.com')
    loginPage.passwordFld.sendKeys('toto123')
    
    loginPage.submitBtn.click()


    expect(headerPage.PageTitleTxt.isDisplayed()).toBe(true)
    expect(headerPage.PageTitleTxt.getText()).toEqual('Superhero Roster')

    expect(headerPage.PageImg.isDisplayed()).toBe(true)

    expect(headerPage.DescriptionTxt.isDisplayed()).toBe(true)
    expect(headerPage.DescriptionTxt.getText()).toEqual('This a super hero web site. we have given you some heroes to strat with. Add as many heroes to start with your dream team.')


})

})