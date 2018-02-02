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
    'Benefits Section Button Tests': browser => {
        browser
        .click(selectors.homePage.benefitsBtns.meetClip)
        .waitForElementVisible('body', 1000)
        browser.back
        browser
        .click(selectors.homePage.benefitsBtns.mobility)
        .waitForElementVisible('body', 1000)
        browser.back
        browser
        .click(selectors.homePage.benefitsBtns.sellMore)
        .waitForElementVisible('body', 1000)
        browser.back
        browser
        .click(selectors.homePage.benefitsBtns.easyToUse)
        .waitForElementVisible('body', 1000)
        browser.back
        browser
        .click(selectors.homePage.benefitsBtns.security)
    }
}