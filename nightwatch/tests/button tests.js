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
    'Banner Button Tests': browser => {
        browser
        .click(selectors.homePage.bannerBtns.buyReader)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.bannerBtns.registerNow)
    },
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
    'Commissions/Rate Buttons Tests': browser => {
        browser
        .clearValue(selectors.homePage.commissionsBtns.amount)
        .setValue(selectors.homePage.commissionsBtns.amount, '100.00')
        .click(selectors.homePage.commissionsBtns.calculate)
        browser.expect.element(selectors.homePage.commissionsBtns.total).text.to.contain('100.00')
        browser.back()
    },
    'Find a Store Button Test': browser => {
        browser
        .click(selectors.homePage.findStore)
        .waitForElementVisible('body', 1000)
    },
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
        .click(selectors.homePage.bottomNavBtns.privacyPolicy)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
        .click(selectors.homePage.bottomNavBtns.termsConditions)
        .waitForElementVisible('body', 1000)
        browser.back()
        browser
    }
}