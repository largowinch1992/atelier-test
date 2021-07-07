const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
    tests  : './src/tests/*\.test.js',
    output : './output',
    helpers: {
        WebDriver: {
            url: 'http://localhost',
            browser: 'chrome',
            windowSize: '1280x960',
            smartWait: 5000,
        },

        REST: {}
    },

    include  : {
        I: './src/setup/actor.js'
    },
    bootstrap: null,
    mocha    : {},
    name     : 'codecept demo tests',

    plugins: {
        wdio: {
            enabled : true,
            services: ['selenium-standalone']
        }
    }
};