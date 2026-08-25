    const {By} = require('selenium-webdriver');

    module.exports = {
        username : By.xpath('//input[@id="user-name"]'),
        password : By.xpath('//input[@id="password"]'),
        LoginBtn : By.xpath('//input[@type="submit"]')
    }