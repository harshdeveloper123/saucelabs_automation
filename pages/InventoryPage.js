const { until } = require("selenium-webdriver");
const InventoryLocators = require("../locators/InventoryLocator");
const config = require("../config/config");

class InventoryPage {

    constructor(driver) {
        this.driver = driver;
    }

    async addProductToCart(productName) {

        const addToCartButton =
            InventoryLocators.addToCartButton(productName);

        await this.driver.wait(
            until.elementLocated(addToCartButton),
            config.defaultWait
        );

        await this.driver.findElement(addToCartButton).click();
    }
}

module.exports = InventoryPage;