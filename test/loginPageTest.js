const loginPage = require("../pages/loginPage");
const productPage = require("../pages/productsPage");
const { assert } = require("chai");
const productsPage = require("../pages/productsPage");
const { productPageLabel } = require("../pages/productsPage");


describe("E2E scenario", () =>{

    it("Enter Username",() => {
        browser.url('/')
        loginPage.enterUserName('standard_user');
        assert.equal('standard_user',loginPage.userName.getValue());

    });

    it("Enter Password", () =>{
        loginPage.enterUserPassword('secret_sauce');
        assert.equal('secret_sauce',loginPage.userPassword.getValue());
    });

    it("Click login button", ()=>{
        loginPage.clickOnLogin();
        
    });
    it("In the product page", () =>{
        console.log(productPage.productPageLabel.getText());
        assert.equal('Products',productPage.productPageLabel.getText());
       
    });

    it("Sort the products from High to Low", ()=>{
        productsPage.productSortContainer.selectByVisibleText('Price (high to low)');
        //assert.equal('Price (high to low)', productPage.inventorySort.getText('option:checked'));
        
    });

    it("Add two products with lowest value to cart",()=>{
        //browser.findElement('//*[@id="inventory_container"]/div/div[1]/div[3]/div','$49.99');
    //    let list = productPage.productChild;
    //    console.log("Nested divs are :", list.length);

    productPage.clickOnLowestItem1();
    productPage.clickOnLowestItem2();

       
    })

});