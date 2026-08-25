const {until} = require('selenium-webdriver');
const InventoryLocators = require('../locators/InventoryLocator');
const config = require('../config/config');
const { post } = require('selenium-webdriver/http');

class CheckoutPage{
    constructor(driver){
        this.driver = driver;
    }

    async getCheckoutTitle(){
      const title =   await this.driver.wait(
            until.elementLocated(InventoryLocators.checkoutTitle),
            config.defaultWait
        )
       return title.getText();
    }

    async enterFirstName(firstname){
        const firstName = await this.driver.wait(
            until.elementLocated(InventoryLocators.firstName),
            config.defaultWait
        )
        await firstName.sendKeys(firstname)
    }

    async enterLastName(lastname){
        const lastName = await this.driver.wait(
            until.elementLocated(InventoryLocators.lastName),
            config.defaultWait
        )
        await lastName.sendKeys(lastname)
    }

    async enterPostalCode(postalcode){
        const postalCode = await this.driver.wait(
            until.elementLocated(InventoryLocators.postalCode),
            config.defaultWait
        )
        await postalCode.sendKeys(postalcode)
    }

    async clickContinue(){
        const clickCont = await this.driver.wait(
            until.elementLocated(InventoryLocators.continueBtn),
            config.defaultWait
        )

        await clickCont.click();
    }


}

module.exports = CheckoutPage