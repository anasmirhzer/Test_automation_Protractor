exports.config = {


    framework: 'jasmine2',



    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--disable-gpu', '--window-size=1000x1000']
          },
        chromeOnly: true,
        directConnect: true
        },
        specs: [
            './test/*_spec.js'
        ],

        jasmineNodeOpts: {
            shownColors: true
        }



    }