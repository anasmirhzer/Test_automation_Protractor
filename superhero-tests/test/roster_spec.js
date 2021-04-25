var RosterPage = require('../page-objects/roster_page')
var LoginPage = require('../page-objects/login_page') // update to your page object

describe('Roster Page', function () {

    browser.manage().window().maximize();
    var rosterPage
    var loginPage


    beforeEach(function () {
        rosterPage = new RosterPage()
        loginPage = new LoginPage()
        browser.manage().window().setSize(1600, 1000);

        // Since this is not an Angular Site
        browser.ignoreSynchronization = true

        // Open URL
        browser.get('/') // call base url
    })
    afterEach(function () {


    })

    it('should display all default roster elements', function () {

        loginPage.emailFld.sendKeys('testinganas@toto.com')
        loginPage.passwordFld.sendKeys('toto123')

        loginPage.submitBtn.click()

        expect(rosterPage.rosterTitleTxt.isDisplayed()).toBe(true)
        expect(rosterPage.rosterTitleTxt.getText()).toEqual('Build your Superhero Roster:')

        expect(rosterPage.wolverineItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.wolverineItemTxt.getText()).toEqual('Wolverine')

        expect(rosterPage.ironmanItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.ironmanItemTxt.getText()).toEqual('Iron Man')

        expect(rosterPage.deadpoolItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.deadpoolItemTxt.getText()).toEqual('Deadpool')

        expect(rosterPage.thorItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.thorItemTxt.getText()).toEqual('Thor')

        expect(rosterPage.spidermanItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.spidermanItemTxt.getText()).toEqual('Spider-Man')

        expect(rosterPage.rosterFldLbl.isDisplayed()).toBe(true)
        expect(rosterPage.rosterFldLbl.getText()).toEqual('ADD A SUPERHERO')

        expect(rosterPage.rosterFld.isDisplayed()).toBe(true)
        expect(rosterPage.rosterFld.getText()).toEqual('')

        expect(rosterPage.submitBtn.isDisplayed()).toBe(true)


    })
    it('it should add a hero on submit', function () {
        loginPage.emailFld.sendKeys('testinganas@toto.com')
        loginPage.passwordFld.sendKeys('toto123')

        loginPage.submitBtn.click()

        rosterPage.rosterFld.sendKeys('Super_Anas')
        
        rosterPage.submitBtn.click()

        expect(element(by.css('#hero-list > li:nth-child(6)')).isDisplayed()).toBe(true)
        expect(element(by.css('#hero-list > li:nth-child(6)')).getText()).toEqual('Super_Anas')

    })

})