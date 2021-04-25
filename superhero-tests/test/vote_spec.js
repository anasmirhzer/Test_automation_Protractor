var VotePage = require('../page-objects/vote_page')
var LoginPage = require('../page-objects/login_page') // update to your page object

describe('Vote Page', function () {
    var votePage
    var loginPage


    beforeEach(function () {
        

        

        votePage = new VotePage()
        loginPage = new LoginPage()

        // Since this is not an Angular Site
        browser.ignoreSynchronization = true

        // Open URL
        browser.get('file:///Users/amir/GIT/Protractor/superhero/index.html') // update to url


    })
    afterEach(function () {


    })


    it('should display all elements', function () {

        loginPage.emailFld.sendKeys('testinganas@toto.com')
        loginPage.passwordFld.sendKeys('toto123')
        loginPage.submitBtn.click()

        // Radio elements

        expect(votePage.voteTitleTxt.isDisplayed()).toBe(true)
        expect(votePage.voteTitleTxt.getText()).toEqual('Vote for your favorite Superhero movie')

        expect(votePage.xmenChoiceRad.isDisplayed()).toBe(true)
        expect(votePage.xmenChoiceRad.getText()).toEqual('X-Men')

        expect(votePage.avengersChoiceRad.isDisplayed()).toBe(true)
        expect(votePage.avengersChoiceRad.getText()).toEqual('Avengers')

        expect(votePage.deadpoolChoiceRad.isDisplayed()).toBe(true)
        expect(votePage.deadpoolChoiceRad.getText()).toEqual('Deadpool')

        expect(votePage.spidermanChoiceRad.isDisplayed()).toBe(true)
        expect(votePage.spidermanChoiceRad.getText()).toEqual('Spider-Man homecoming')

        expect(votePage.ironmanChoiceRad.isDisplayed()).toBe(true)
        expect(votePage.ironmanChoiceRad.getText()).toEqual('Iron Man')

        expect(votePage.submitBtn.isDisplayed()).toBe(true)
        

        // Votes elements

        expect(votePage.movieLbl.isDisplayed()).toBe(true)
        expect(votePage.movieLbl.getText()).toEqual('Movie')

        expect(votePage.voteLbl.isDisplayed()).toBe(true)
        expect(votePage.voteLbl.getText()).toEqual('Votes')

        expect(votePage.xmenLbl.isDisplayed()).toBe(true)
        expect(votePage.xmenLbl.getText()).toEqual('X-Men')

        expect(votePage.xmenVal.isDisplayed()).toBe(true)
        expect(votePage.xmenVal.getText()).toEqual('10')

        expect(votePage.avengersLbl.isDisplayed()).toBe(true)
        expect(votePage.avengersLbl.getText()).toEqual('Avengers')

        expect(votePage.avengersVal.isDisplayed()).toBe(true)
        expect(votePage.avengersVal.getText()).toEqual('5')

        expect(votePage.deadpoolLbl.isDisplayed()).toBe(true)
        expect(votePage.deadpoolLbl.getText()).toEqual('Deadpool')

        expect(votePage.deadpoolVal.isDisplayed()).toBe(true)
        expect(votePage.deadpoolVal.getText()).toEqual('22')

        expect(votePage.spidermanLbl.isDisplayed()).toBe(true)
        expect(votePage.spidermanLbl.getText()).toEqual('Spider-Man homecoming')

        expect(votePage.spidermanVal.isDisplayed()).toBe(true)
        expect(votePage.spidermanVal.getText()).toEqual('12')

        expect(votePage.ironmanLbl.isDisplayed()).toBe(true)
        expect(votePage.ironmanLbl.getText()).toEqual('Iron Man')

        expect(votePage.ironmanVal.isDisplayed()).toBe(true)
        expect(votePage.ironmanVal.getText()).toEqual('1')


    })

    it('should add 1 to X-men test', function () {

        loginPage.emailFld.sendKeys('testinganas@toto.com')
        loginPage.passwordFld.sendKeys('toto123')
        loginPage.submitBtn.click()

        //browser.actions().mouseMove(votePage.submitBtn).perform();
        
        //votePage.submitBtn.click();
        expect(votePage.submitBtn.isDisplayed()).toBe(true)
        //expect(votePage.submitBtn.isDisplayed()).toBe(true)
        
        expect(votePage.xmenVal.getText()).toEqual('10')

    })

})