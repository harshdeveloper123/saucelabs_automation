const {getDriver,quitDriver} = require('../utils/driver');
const LoginPage = require('../pages/LoginPage');
const config = require('../config/config');

jest.setTimeout(90000);

describe("verify valid login",()=>{
    let driver;
    let loginpage;

    beforeAll(async()=>{
        console.log("before all started");
        driver = await getDriver();
        console.log(config);
        await driver.get(config.baseUrl);
        console.log('login page opened... lets go');
        loginpage = new LoginPage(driver);


    })
    test('valid login perform' , async()=>{
        await loginpage.Login(config.username,config.password);
    })
})
