const loginPage = require("../pages/loginPage");
const { assert } = require("chai");

describe("Login by providing username and password", function(){

    it("Enter Username",function(){
        browser.url('/')
        loginPage.enterUserName('standard_user');
        assert.equal('standard_user',loginPage.userName.getValue());

    });

    it("Enter Password",function(){
        loginPage.enterUserPassword('secret_sauce');
        assert.equal('secret_sauce',loginPage.userPassword.getValue());
    });
    it("click login button", function(){
        loginPage.clickOnLogin();
    });
});