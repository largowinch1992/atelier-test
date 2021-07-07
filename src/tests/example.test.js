const assert = require('assert')
const SELECTORS = require('../selectors')

const sectionText = `Leverage Our Expertise
Engineered to keep your network both robust and agile, this innovative and powerfully intuitive software enables you to host fully digital events or hybrid digital precursors to your real world events.
Expand your reach beyond traditional markets with a digital addition to your portfolio, and leverage our expertise to capitalise on your assets.`

Feature('Check UI');

Before(async ({ I }) => {
    I.amOnPage('https://atelier.technology/')
});

Scenario('I check section and content is displayed', async ({ I }) => {
    I.seeElement(SELECTORS.HOME_PAGE.MAIN_WRAPPER);

    I.waitForClickable(SELECTORS.HOME_PAGE.DISCOVER_NOW_BUTTON,5);
  
    I.click(SELECTORS.HOME_PAGE.DISCOVER_NOW_BUTTON);

    I.waitForVisible(SELECTORS.EVENTS_PAGE.MAIN_WRAPPER,5);

    I.scrollTo(SELECTORS.EVENTS_PAGE.LEVERAGE_OUR_EXPERTISE_SECTION.WRAPPER,0,-200);

    I.waitForVisible(SELECTORS.EVENTS_PAGE.LEVERAGE_OUR_EXPERTISE_SECTION.IMG,5);
    I.seeElement(SELECTORS.EVENTS_PAGE.LEVERAGE_OUR_EXPERTISE_SECTION.IMG);
    I.saveScreenshot('section.png');

    const getSectionText = await I.grabTextFrom(SELECTORS.EVENTS_PAGE.LEVERAGE_OUR_EXPERTISE_SECTION.TEXT);
    assert.deepStrictEqual(getSectionText,sectionText);
    
});


