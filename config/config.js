require('dotenv').config();

module.exports={
    browser:process.env.BROWSER,
    username:process.env.USER_NAME,
    password:process.env.PASS_WORD,
    baseUrl:process.env.BASE_URL,
    implicitWait: Number(process.env.IMPLICIT_WAIT || 5000),
    pageLoadTimeout: Number(process.env.PAGE_LOAD_TIMEOUT || 30000),
    scriptTimeout: Number(process.env.SCRIPT_TIMEOUT || 30000),
    defaultWait: Number(process.env.DEFAULT_WAIT),
    maxWait: Number(process.env.MAX_WAIT)
}