var LoginPage = function () {}

LoginPage.prototype = Object.create({},{

elementName: {get: function() {return element(by.id('')) } }, //update for your element 

loginTitletxt: {get: function() {return element(by.id('login-title')) } },
emailFldLbl : {get: function() {return element(by.css('#form-login > div:nth-child(1) > label')) } },
emailFld: {get: function() {return element(by.id('LoginEmail')) } },
passwordFldLbl : {get: function() {return element(by.css('#form-login > div:nth-child(2) > label')) } },
passwordFld: {get: function() {return element(by.id('LoginPassword')) } },
rememberCheckbox: {get: function() {return element(by.id('RememberLoginCheck')) } },
rememberCheckLbl : {get: function() {return element(by.css('#form-login > div.mb-3.form-check > label')) } },
submitBtn : { get: function() {return element(by.buttonText('Submit')) } },
loginAlert : {get: function() {return element(by.id('login-alert')) } }
})

module.exports = LoginPage