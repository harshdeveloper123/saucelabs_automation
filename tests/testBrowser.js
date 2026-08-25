const { get } = require('selenium-webdriver/http');
const {getDriver , quitDriver} = require('../utils/driver');
const config = require('../config/config')

//now create a function to open the required website saucedemo with running of a script
(async function() {
    const driver = await getDriver();
    await driver.get(config.baseUrl)
    await quitDriver();
})
()