describe('Super Hero Page', function() {
    it ('should load the correct URL', function() {

        browser.ignoreSynchronization = true
        
        // Open URL
        browser.get('file:///Users/amir/GIT/Protractor/superhero/index.html')


        // Enter text into fields : 
        element(by.id('LoginEmail')).sendKeys('Just testing')
        element(by.id('LoginPassword')).sendKeys('password')

        // Verify stuff
        expect(element(by.id('login-title')).getText()).toEqual('Welcome. Please log In.')
        expect(element(by.id('LoginEmail')).getAttribute('value')).toEqual('Just testing')

        //browser.sleep(5000)

})


})