const {until} = require('selenium-webdriver');
const InventoryLocators = require('../locators/InventoryLocator');
const config = require('../config/config');

class CartPage {

    constructor(driver) {
        this.driver = driver;
    }

    async openCart() {

        await this.driver.wait(
            until.elementLocated(InventoryLocators.shoppingCart),
            config.defaultWait
        );

        await this.driver
            .findElement(InventoryLocators.shoppingCart)
            .click();
    }

    async verifyProduct(productName) {

        const cartItem = InventoryLocators.cartItem(productName);

        await this.driver.wait(
            until.elementLocated(cartItem),
            config.defaultWait
        );

        return await this.driver.findElement(cartItem).isDisplayed();
    }
    async clickCheckout(){
        await this.driver.wait(
            until.elementLocated(InventoryLocators.checkout),
            config.defaultWait
        )
        //click on the checkout button 
        console.log('wait clicking on the checkout button. Please wait ....')
        await this.driver.findElement(InventoryLocators.checkout).click();
    }
}

module.exports = CartPage;