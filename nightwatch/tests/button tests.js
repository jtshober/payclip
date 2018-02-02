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
    // These are the main navigation buttons across the top of the site.
    'Top NavBar Button Tests': browser => {
        browser
            .click(selectors.homePage.topNavBtns.contact)
            .waitForElementVisible('body', 1000)        
            browser.back()
        browser
            .click(selectors.homePage.topNavBtns.help)
            .waitForElementVisible('body', 1000)
        browser.back()
        browser
            .click(selectors.homePage.topNavBtns.account)
            .waitForElementVisible('body', 1000)
        browser.back()
        browser
            .click(selectors.homePage.topNavBtns.buyReader)
            .waitForElementVisible('body', 1000)
            .click(selectors.homePage.topNavBtns.clipHome)
    },
    // These are the 2 buttons in the middle of the media banner, "Buy Your Clip", and "Register Here".
    'Banner Button Tests': browser => {
        browser
        .click(selectors.homePage.bannerBtns.buyReader)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.bannerBtns.registerNow)
    },
    // These are the individual links listed under "Our benefits".
    'Benefits Section Button Tests': browser => {
        browser
        .click(selectors.homePage.benefitsBtns.meetClip)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.benefitsBtns.mobility)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.benefitsBtns.sellMore)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.benefitsBtns.easyToUse)
        .waitForElementVisible('body', 1000)
        browser.back()
    },
    // These are the buttons listed under "Our commissions", where the amount is set to $100.00.
    'Commissions/Rate Buttons Tests': browser => {
        browser
        .clearValue(selectors.homePage.commissionsBtns.amount)
        .setValue(selectors.homePage.commissionsBtns.amount, '100.00')
        .click(selectors.homePage.commissionsBtns.calculate)
        browser.expect.element(selectors.homePage.commissionsBtns.total).text.to.contain('100.00')
        browser.back()
        browser
    },
    // This is the middle of the page, "Find a Store" button.
    'Find a Store Button Test': browser => {
        browser
        .click(selectors.homePage.findStore)
        .waitForElementVisible('body', 1000)
    },
    // These are all the buttons that showcase how Clip can be used in different spaces.
    'Business Buttons Tests': browser => {
        browser
        .click(selectors.homePage.everyBusinessBtns.retail)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.everyBusinessBtns.professionalServices)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.everyBusinessBtns.foodDrink)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.everyBusinessBtns.beautyHealth)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.everyBusinessBtns.sportsEntertainment)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.everyBusinessBtns.estateConstruction)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.everyBusinessBtns.accomodation)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.everyBusinessBtns.transportation)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.everyBusinessBtns.education)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.everyBusinessBtns.registerNow)
    },
    // These buttons/links are found under the "Using Clip is fast and easy" section of the homepage.
    'Fast & Easy Section Buttons': browser => {
        browser
        .click(selectors.homePage.fastEasyBtns.registerNow)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.fastEasyBtns.buyReader)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.fastEasyBtns.ios)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.fastEasyBtns.android)
    },
    // These buttons are found towards the bottom in the "Do you need help?" section.
    'Help Section Buttons': browser => {
        browser
        .click(selectors.homePage.helpBtns.call)
        .waitForElementVisible('body', 1000)
        .click(selectors.homePage.helpBtns.chat)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.helpBtns.questions)
    },
    // These are all the buttons found in the bottom Navigation pane, the the very bottom of the homepage.
    'Bottom NavBar Button Tests': browser => {
        browser
        .click(selectors.homePage.bottomNavBtns.about)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.bottomNavBtns.news)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.bottomNavBtns.blog)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.bottomNavBtns.help)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.bottomNavBtns.contact)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.bottomNavBtns.facebook)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.bottomNavBtns.twitter)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.bottomNavBtns.youtube)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.bottomNavBtns.appStore)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.bottomNavBtns.googlePlay)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
    }
}