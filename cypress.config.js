module.exports = {
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    screenshotOnRunFailure: true,
    screenshotsFolder: './cypress/reports/screenshots',
    baseUrl: 'https://www.teapplix.com/',
    defaultCommandTimeout: 50000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
