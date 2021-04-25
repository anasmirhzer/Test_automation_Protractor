const SpecReporter = require('jasmine-spec-reporter').SpecReporter
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'NasmirTestReport.html',
    reportOnlyFailedSpecs: false,
    captureOnlyFailedSpecs: true,
    reportTitle: "Protractor UI test results",
    showSummary: true
});


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
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        print() { },
    },

    // Setup the report before any tests start
    beforeLaunch: function () {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },
    // Close the report after all tests finish
    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },
    logLevel: 'WARN',
    onPrepare() {
        jasmine.getEnv().addReporter(reporter)
        jasmine.getEnv().addReporter(
            new SpecReporter({
                spec: {
                    displayStacktrace: true,
                    displayDuration: true,
                },
                summary: {
                    displayDuration: true,
                },
            })
        )
    }


}