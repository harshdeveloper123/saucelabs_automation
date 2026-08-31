const {until} = require('selenium-webdriver');
const InventoryLocators = require('../locators/InventoryLocator');
const config = require('../config/config');

class MenuPage{

    constructor(driver) {
        this.driver = driver;
    }

    async openMenu() {
        const menuButton = await this.driver.wait(
            console.log("Waiting for menu buttons are  to be located..."),
            until.elementLocated(
                InventoryLocators.menuButton
            ),
            config.defaultWait
        );

        await menuButton.click();
    }

    async clickLogout(){
        const logoutBtn = await this.driver.wait(
            until.elementLocated(InventoryLocators.logout),
            config.defaultWait
        )
        await logoutBtn.click()
    }
}

module.exports = MenuPage;