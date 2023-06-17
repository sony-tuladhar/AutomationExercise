const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "charts": true,
    "reportPageTitle": "Summary Report",
    "embeddedScreenshots": true,
    "inlineAssets": true,
    "html":true,
  },

  e2e: {
    chromeWebSecurity: false,
    viewportWidth:1280,
    viewportHeight: 1000,
    defaultCommandTimeout: 10000,
    experimentalRunAllSpecs : true,
    numTestsKeptInMemory: 0,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{
    "baseurl":"https://automationexercise.com",
    "email":"testuser@mailinator.com",
    "password":"password"

  }
});
