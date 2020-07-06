const loginPage = require("../pages/loginPage");
const productsPage = require("../pages/productsPage");
const { assert } = require("chai");

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
    it("Verify if in the product page", () =>{
        console.log(productsPage.productPageLabel.getText());
        assert.equal('Products',productsPage.productPageLabel.getText());
       
    });

    it("Sort the products from High to Low", ()=>{
        productsPage.productSortContainer.selectByVisibleText('Price (high to low)');
        //assert.equal('Price (high to low)', productPage.inventorySort.getText('option:checked'));
        
    });

    it("Add two products with lowest value to cart",()=>{
        //browser.findElement('//*[@id="inventory_container"]/div/div[1]/div[3]/div','$49.99');
    //    let list = productPage.productChild;
    //    console.log("Nested divs are :", list.length);

    productsPage.clickOnLowestItem1();
    assert.equal('REMOVE',productsPage.lowestPricedItem1.getText());
    productsPage.clickOnLowestItem2();
    assert.equal('REMOVE',productsPage.lowestPricedItem2.getText());    
    });

});