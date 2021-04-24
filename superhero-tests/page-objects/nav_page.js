var NavPage = function() {}

NavPage.prototype = Object.create({}, {

    HomeLnk: {get: function() {return element(by.linkText('Home') ) }  },
    VideoChannelLnk: {get: function() {return element(by.linkText('Nasmir Music Channel')) } }, 
    HeroFactsLnk: {get: function() {return element(by.linkText('Hero Facts')) } },
    LogoutLnk: {get: function() {return element(by.linkText('Logout')) } },
    WolverineOption: {get: function() {return element(by.linkText('Wolverine')) } },
    SpridermanOption: {get: function() {return element(by.linkText('Spider-Man')) } },

    WolverineModalTitle: {get: function() {return element(by.css('#WolverineModalLabel')) } },
    WolverineModalBody: {get: function() {return element(by.css('#WolverineModal > div > div > div.modal-body')) } },
    WolverineModalCloseBtn: {get: function() {return element(by.css('#WolverineModal > div > div > div.modal-footer > button')) } },
    WolverineModalXbtn: {get: function() {return element(by.css('#WolverineModal > div > div > div.modal-header > button')) } },
    
    SpridermanModalTtile: {get: function() {return element(by.id('SpiderManModalLabel')) } },
    SpridermanModalBody: {get: function() {return element(by.css('#SpiderManModal > div > div > div.modal-body')) } },
    SpidermanModalCloseBtn: {get: function() {return element(by.css('#SpiderManModal > div > div > div.modal-footer > button')) } },
    SpidermanModalXbtn: {get: function() {return element(by.css('#SpiderManModal > div > div > div.modal-header > button')) } },
 
    SearchFldInput: {get: function() {return element(by.id('search-box'))}},
    SubmitSearchBtn: {get: function() {return element(by.buttonText('Search'))}},
    

})

module.exports = NavPage
