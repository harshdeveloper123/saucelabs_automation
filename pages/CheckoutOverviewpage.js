const {until} = require('selenium-webdriver');
const InventoryLocators = require('../locators/InventoryLocator');
const config = require('../config/config');

class CheckoutOverviewPage{
    constructor(driver){
        this.driver = driver;
    }

    async getCheckoutOverviewTitle(){
        const OverviewTitle = await this.driver.wait(
            until.elementLocated(InventoryLocators.checkoutOverviewTitle),
            config.defaultWait
        )
       return await OverviewTitle.getText();
    }

    async getProductName(){
        const productname = await this.driver.wait(
            until.elementLocated(InventoryLocators.checkoutProductName),
            config.defaultWait
        )
        return await productname.getText();
    }

    async clickFinish(){
        const finish = await this.driver.wait(
            until.elementLocated(InventoryLocators.finishBtn),
            config.defaultWait
        )
        await finish.click();
    }
}

module.exports = CheckoutOverviewPage;
