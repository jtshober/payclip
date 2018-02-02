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
    'Top NavBar Button Tests': browser => {
        browser
            .click(selectors.homePage.topNavBtns.contact)
            .waitForElementVisible('body', 1000)        
            browser.back
        browser
            .click(selectors.homePage.topNavBtns.help)
            .waitForElementVisible('body', 1000)
        browser.back
        browser
            .click(selectors.homePage.topNavBtns.account)
            .waitForElementVisible('body', 1000)
        browser.back
        browser
            .click(selectors.homePage.topNavBtns.buyReader)
            .waitForElementVisible('body', 1000)
            .click(selectors.homePage.topNavBtns.clipHome)
    }
}