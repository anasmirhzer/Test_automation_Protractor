var HeaderPage = function() {}

HeaderPage.prototype = Object.create({}, {

    PageImg: {get: function() {return element(by.css('body > div.container-fluid > div.container-fluid > div:nth-child(1) > img') ) }  },
    PageTitleTxt: {get: function() {return element(by.css('body > div.container-fluid > div.d-flex.justify-content-center > h1')) } }, 
    DescriptionTxt: {get: function() {return element(by.css('body > div.container-fluid > div.container-fluid > div:nth-child(2) > div > p')) } }

})

module.exports = HeaderPage
