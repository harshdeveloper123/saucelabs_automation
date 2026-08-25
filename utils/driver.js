const {Builder} = require('selenium-webdriver');
const config = require('../config/config');

let driver;

async function getDriver() {
    if (!driver) {
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