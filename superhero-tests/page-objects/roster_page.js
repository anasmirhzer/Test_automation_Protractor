var RosterPage = function() {}

    RosterPage.prototype = Object.create({}, {
        rosterTitleTxt: { get: function() {return element(by.css('body > div.container-fluid > div.container-fluid > div:nth-child(3) > h3')) } },
        wolverineItemTxt: { get: function() {return element(by.css('#hero-list > li:nth-child(1)')) } },
        ironmanItemTxt: { get: function() {return element(by.css('#hero-list > li:nth-child(2)')) } },
        deadpoolItemTxt: { get: function() {return element(by.css('#hero-list > li:nth-child(3)')) } },
        thorItemTxt: { get: function() {return element(by.css('#hero-list > li:nth-child(4)')) } },
        spidermanItemTxt: { get: function() {return element(by.css('#hero-list > li:nth-child(5)')) } },
        rosterFldLbl: { get: function() {return element(by.css('#addHero-form > div > label')) }  },
        rosterFld: { get: function() {return element(by.id('heroInput')) } },
        submitBtn: { get: function() {return element(by.css('#addHero-form > button')) } }
    })


module.exports = RosterPage