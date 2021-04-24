var VotePage = function() {}

VotePage.prototype = Object.create({},{

    voteTitleTxt : {get: function() { return element(by.css('body > div.container-fluid > div.container-fluid > div:nth-child(5) > div > h4')) } },
    xmenChoiceRad : {get: function() { return element(by.css('#vote-form > div:nth-child(1) > label')) } },
    avengersChoiceRad : {get: function() { return element(by.css('#vote-form > div:nth-child(2) > label')) } },
    deadpoolChoiceRad : {get: function() { return element(by.css('#vote-form > div:nth-child(3) > label')) } },
    spidermanChoiceRad : {get: function() { return element(by.css('#vote-form > div:nth-child(4) > label')) } },
    ironmanChoiceRad : {get: function() { return element(by.css('#vote-form > div:nth-child(5) > label')) } },
    submitBtn : { get: function() {return element(by.css('#vote-form > button')) } },

    movieLbl : {get: function() { return element(by.css('body > div.container-fluid > div.container-fluid > div:nth-child(5) > div > table > thead > tr > th:nth-child(1)')) } },
    voteLbl : {get: function() { return element(by.css('body > div.container-fluid > div.container-fluid > div:nth-child(5) > div > table > thead > tr > th:nth-child(2)')) } },
    xmenLbl : {get: function() { return element(by.id('movieName1')) } },
    xmenVal : {get: function() { return element(by.id('movieVote1')) } },
    avengersLbl : {get: function() { return element(by.id('movieName2')) } },
    avengersVal : {get: function() { return element(by.id('movieVote2')) } },
    deadpoolLbl : {get: function() { return element(by.id('movieName3')) } },
    deadpoolVal : {get: function() { return element(by.id('movieVote3')) } },
    spidermanLbl : {get: function() { return element(by.id('movieName4')) } },
    spidermanVal : {get: function() { return element(by.id('movieVote4')) } },
    ironmanLbl : {get: function() { return element(by.id('movieName5')) } },
    ironmanVal : {get: function() { return element(by.id('movieVote5')) } },
})

module.exports = VotePage