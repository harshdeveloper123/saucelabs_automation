const config = require('../config/config');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const LoginPage = require('../pages/LoginPage');
const CheckoutPage = require('../pages/CheckoutPage');
const CheckoutOverviewPage = require('../pages/CheckoutOverviewpage');
const MenuPage = require('../pages/MenuPage');
const { getDriver, quitDriver } = require('../utils/driver');
jest.setTimeout(90000);

describe("Product purchase testing", () => {
    let driver;
    let loginPage;
    let inventoryPage;
    let cartPage;
    let checkoutPage;
    let checkoutOverviewPage;
    let menuPage;
    beforeAll(async () => {
        console.log('before all started');
        driver = await getDriver();
        loginPage = new LoginPage(driver);
        inventoryPage = new InventoryPage(driver);
        cartPage = new CartPage(driver);
        checkoutPage = new CheckoutPage(driver);
        checkoutOverviewPage = new CheckoutOverviewPage(driver);
        menuPage = new MenuPage(driver);
        await driver.get(config.baseUrl);


    })
    test("Login and add product to cart", async () => {

        await loginPage.Login(
            config.username,
            config.password
        );

        console.log("Login completed");

        await inventoryPage.addProductToCart(
            "Sauce Labs Backpack"
        );

        console.log("Checking... Yayyy!! Product are added to cart");
        await cartPage.openCart();

        const productPresent =
            await cartPage.verifyProduct(
                "Sauce Labs Backpack"
            );

        expect(productPresent).toBe(true);

        console.log("Product verified in cart");

        await cartPage.clickCheckout();

        console.log('checkout button clicked');

        //verify the checkout page title
        const getCheckouttitle = await checkoutPage.getCheckoutTitle();
        expect(getCheckouttitle).toBe("Checkout: Your Information");

        console.log("Checkout page verified");
        // Fill checkout information
        await checkoutPage.enterFirstName("John");

        await checkoutPage.enterLastName("Smith");

        await checkoutPage.enterPostalCode("302001");

        console.log("Checkout information entered");

        // Click Continue
        await checkoutPage.clickContinue();

        console.log("Continue button clicked");

        //go to the checkout overview page
        const overviewtitle = await checkoutOverviewPage.getCheckoutOverviewTitle();
        expect(overviewtitle).toBe("Checkout: Overview");

        console.log('overview page verified');

        const checkoutProdName = await checkoutOverviewPage.getProductName();
        expect(checkoutProdName).toBe('Sauce Labs Backpack');

        //click on the finish button 
        await checkoutOverviewPage.clickFinish();

        //click on side menu icon 
        await menuPage.openMenu();
        //click on logout button
        await menuPage.clickLogout()

       
        await loginPage.verifyLoginPage();

        console.log('logout verified successfully');

    });

})