const {Builder} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox')
const config = require('../config/config');

let driver;

async function getDriver() {
    if (!driver) {
        const options = new firefox.Options();
        options.addArguments('--headless');
        driver = await new Builder()
            .forBrowser(config.browser)
            .build();
    }

    return driver;
}

async function quitDriver() {
    if (driver) {
        await driver.quit();
        driver = null;
    }
}

module.exports = {
    getDriver,
    quitDriver
};