var TestPage = function(){}
TestPage.prototype = Object.create({},{
    emailFld : {get: function() { return element(by.id('LoginEmail'))}},
    passwordFld : {get: function() { return element(by.id('LoginPassword'))}},
    LoginTitleLbl : {get: function() { return element(by.id('login-title'))}}


})
module.exports = TestPage