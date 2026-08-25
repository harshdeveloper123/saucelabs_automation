const {until} = require('selenium-webdriver');
const LoginLocators = require('../locators/LoginLocators');
const config = require('../config/config');

class LoginPage{
    constructor(driver){
        this.driver = driver;
    }

 // make the login script
 async enterUserName(username){
    await this.driver.wait(
        until.elementLocated(LoginLocators.username),
        config.defaultWait
    )
    await this.driver.findElement(LoginLocators.username).sendKeys(username);
 }

 async enterPassword(password){
    await this.driver.wait(
        until.elementLocated(LoginLocators.password),
        config.defaultWait
    );

    await this.driver.findElement(LoginLocators.password).sendKeys(password)
 }

 async clickLogin(){
    await this.driver.wait(
        until.elementLocated(LoginLocators.LoginBtn),
        config.defaultWait
    );

    await this.driver.findElement(LoginLocators.LoginBtn).click();
 }

 async Login(username,password){
    console.log('Login method started');
    await this.enterUserName(username);
    console.log('enter username');
    await this.enterPassword(password);
console.log('entered password');
    await this.clickLogin();
    console.log('Login completed');
}

async verifyLoginPage() {
    console.log('searching for login');

    await this.driver.wait(
        until.elementLocated(LoginLocators.LoginBtn),
        config.defaultWait
    );
}

}

module.exports = LoginPage