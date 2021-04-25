var TestPage = require('../page-objects/test_pages')



describe('Super Hero Page', function () {
    var testPage
    // Before each test do something
    beforeEach(function () {

        testPage = new TestPage()

        browser.ignoreSynchronization = true

        // Open URL
        browser.get('/') // call base url


    })

    afterEach(function () {

    })
    it('should load the correct URL', function () {

        // Enter text into fields : 
        testPage.emailFld.sendKeys('Just testing')
        testPage.passwordFld.sendKeys('password')

        // Verify stuff
        expect(testPage.LoginTitleLbl.getText()).toEqual('Welcome. Please log In.')
        expect(testPage.emailFld.getAttribute('value')).toEqual('Just testing')

        //browser.sleep(5000)

    })
})