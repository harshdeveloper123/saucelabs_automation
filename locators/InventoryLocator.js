const {By} = require('selenium-webdriver');

module.exports = {
    productName: (productName) =>
    By.xpath(
        `//div[@class='inventory_item'][.//div[text()='${productName}']]//div[@class='inventory_item_name']`
    ),
    productPrice: (productName) =>
    By.xpath(
        `//div[@class='inventory_item'][.//div[text()='${productName}']]//div[@class='inventory_item_price']`
    ),
    addToCartButton: (productName) =>
    By.xpath(
        `//div[@class='inventory_item'][.//div[text()='${productName}']]//button`
    ),
    shoppingCart: By.className("shopping_cart_link"),

    cartItem: (productName) =>
        By.xpath(
            `//div[@class='cart_item'][.//div[text()='${productName}']]`
        ),
    
    checkout: By.xpath('//button[@id="checkout"]'),

    checkoutTitle : By.xpath('//span[@class="title"]'),
    firstName : By.xpath('//input[@id="first-name"]'),
    lastName : By.xpath('//input[@id="last-name"]'),
    postalCode : By.xpath('//input[@id="postal-code"]'),
    continueBtn : By.xpath('//input[@id="continue"]'),
    checkoutOverviewTitle : By.xpath('//span[@class="title"]'),
    checkoutProductName : By.xpath('//div[@data-test="inventory-item-name"]'),
    finishBtn : By.xpath('//button[@id = "finish"]'),
    menuButton : By.xpath('//button[@id = "react-burger-menu-btn"]'),
    logout : By.xpath('//a[@id = "logout_sidebar_link"]'),
   
    logoutButton: By.id("logout_sidebar_link")
}