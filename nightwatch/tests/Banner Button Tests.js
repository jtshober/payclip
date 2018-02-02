const selectors = require('../test_data/css_selectors')
const data = require('../test_data/test_data')

module.exports = {
    beforeEach: browser => {
        browser.url('https://clip.mx/us/'),
        browser
        .waitForElementVisible('body', 1000)
    },
    after: browser => {
        browser.end()
    },
    'Banner Button Tests': browser => {
        browser
        .click(selectors.homePage.bannerBtns.buyReader)
        .waitForElementVisible('body', 1000)
        browser.back
        browser
        .click(selectors.homePage.bannerBtns.registerNow)
    }
}