var NavPage = require('../page-objects/nav_page')
var LoginPage = require('../page-objects/login_page') // update to your page object


describe('Nav test', function(){

    var NavPAge 
    var loginPage

    beforeEach(function(){

        browser.manage().window().maximize();

        navPage = new NavPage()
        loginPage = new LoginPage()

        // Since this is not an Angular Site
        browser.ignoreSynchronization = true

        // Open URL
        browser.get('file:///Users/amir/GIT/Protractor/superhero/index.html') // update to url
    


    })
afterEach(function(){


})

it ('should display all Nav elements', function(){
    loginPage.emailFld.sendKeys('testinganas@toto.com')
    loginPage.passwordFld.sendKeys('toto123')

    loginPage.submitBtn.click()
    
    // Nav bar Items 
    expect(navPage.HomeLnk.isDisplayed()).toBe(true)

    expect(navPage.VideoChannelLnk.isDisplayed()).toBe(true)

    expect(navPage.HeroFactsLnk.isDisplayed()).toBe(true)

    expect(navPage.LogoutLnk.isDisplayed()).toBe(true)


    // Hero facts items
    navPage.HeroFactsLnk.click();

    expect(navPage.WolverineOption.isDisplayed()).toBe(true)
    expect(navPage.SpridermanOption.isDisplayed()).toBe(true)

})


it ('should display Worlveine Modal elements', function(){
    loginPage.emailFld.sendKeys('testinganas@toto.com')
    loginPage.passwordFld.sendKeys('toto123')
    
    loginPage.submitBtn.click()

    navPage.HeroFactsLnk.click();

    expect(navPage.WolverineOption.isDisplayed()).toBe(true)

    navPage.WolverineOption.click();
    
    browser.sleep(250);
    expect(navPage.WolverineModalTitle.isPresent()).toBeTruthy()
    expect(navPage.WolverineModalTitle.getText()).toEqual('Wolverine Fact')

    expect(navPage.WolverineModalBody.isPresent()).toBeTruthy()
    expect(navPage.WolverineModalBody.getText()).toEqual('Wolverine made his first comic book appearance in 1974.')

    expect(navPage.WolverineModalCloseBtn.isPresent()).toBeTruthy()
    expect(navPage.WolverineModalXbtn.isPresent()).toBeTruthy()

    navPage.WolverineModalCloseBtn.click();

})




it ('should display Spider-man Modal elements', function(){
    loginPage.emailFld.sendKeys('testinganas@toto.com')
    loginPage.passwordFld.sendKeys('toto123')
    
    loginPage.submitBtn.click()

    navPage.HeroFactsLnk.click();

    expect(navPage.SpridermanOption.isDisplayed()).toBe(true)

    navPage.SpridermanOption.click();
    
    browser.sleep(250);
    expect(navPage.SpridermanModalTtile.isPresent()).toBeTruthy()
    expect(navPage.SpridermanModalTtile.getText()).toEqual('Spider-Man Fact')

    expect(navPage.SpridermanModalBody.isPresent()).toBeTruthy()
    expect(navPage.SpridermanModalBody.getText()).toEqual('Spider-man was created by Stan Lee Ditko and first appeared in 1962.')

    expect(navPage.WolverineModalCloseBtn.isPresent()).toBeTruthy()
    expect(navPage.WolverineModalXbtn.isPresent()).toBeTruthy()

    navPage.SpidermanModalXbtn.click();

})

it ('should display Login page without email and pwd', function(){
    loginPage.emailFld.sendKeys('testinganas@toto.com')
    loginPage.passwordFld.sendKeys('toto123')
    
    loginPage.submitBtn.click()


})

it ('should display Login page with email and pwd', function(){
    // log in 
    loginPage.emailFld.sendKeys('testinganas@toto.com')
    loginPage.passwordFld.sendKeys('toto123')
    
    loginPage.submitBtn.click()
    // Log out 
    navPage.LogoutLnk.click()

    // Check the field text
    expect(loginPage.emailFld.getAttribute('value')).toEqual('')
    expect(loginPage.emailFld.getAttribute('value')).toEqual('')


})

it ('should display Login page with email and pwd', function(){
    // log in 
    loginPage.emailFld.sendKeys('testinganas@toto.com')
    loginPage.passwordFld.sendKeys('toto123')
    
    loginPage.rememberCheckbox.click()

    loginPage.submitBtn.click()
    // Log out 
    navPage.LogoutLnk.click()

    // Check the field text
    expect(loginPage.emailFld.getAttribute('value')).toEqual('testinganas@toto.com')
    expect(loginPage.passwordFld.getAttribute('value')).toEqual('toto123')
    // check box selected
    expect(loginPage.rememberCheckbox.isSelected()).toBeTruthy();

})


it ('it should display alert for not found', function(){
    // log in 
    loginPage.emailFld.sendKeys('testinganas@toto.com')
    loginPage.passwordFld.sendKeys('toto123')
    
    loginPage.submitBtn.click()

    

    // Input search item
    navPage.SearchFldInput.sendKeys('bob')
    navPage.SubmitSearchBtn.click()

    //var EC = browser.Expectedconditions;
    //browser.wait(EC.alertIsPresent(), 3000);

    browser.sleep(30)

    expect(browser.switchTo().alert().getText()).toEqual('Your search for bob returned zero results ')
    browser.switchTo().alert().accept()



})


it ('it should display alert for wolverine', function(){
    // log in 
    loginPage.emailFld.sendKeys('testinganas@toto.com')
    loginPage.passwordFld.sendKeys('toto123')
    
    loginPage.submitBtn.click()

    

    // Input search item
    navPage.SearchFldInput.sendKeys('wolverine')
    navPage.SubmitSearchBtn.click()

    //var EC = browser.Expectedconditions;
    //browser.wait(EC.alertIsPresent(), 3000);

    browser.sleep(30)

    expect(browser.switchTo().alert().getText()).toEqual('Wolverine is awesome!')
    browser.switchTo().alert().accept()


})

})