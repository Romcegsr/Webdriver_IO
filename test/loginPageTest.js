const loginPage = require("../pages/loginPage");
const productsPage = require("../pages/productsPage");
const shopCartPage = require("../pages/shoppingCart");
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
     
    assert.exists('$7.99', productsPage.lowestPrice1.getText());
    productsPage.clickOnLowestItem1();
    assert.equal('REMOVE',productsPage.lowestPricedItem1.getText());
   
     // Verify the price of the second lowest priced item is $9.99 and then add the item to cart 
    assert.exists('$9.99', productsPage.lowestPrice1.getText());
    productsPage.clickOnLowestItem2();
    assert.equal('REMOVE',productsPage.lowestPricedItem2.getText());    
    });

    it("Open the shopping cart", ()=>{
    //Open the basket and verify if 2 items are added to it
    
    productsPage.clickOnShoppingCart();
    //Let's use browser to get div text
    browser.pause(2000);
    console.log(shopCartPage.itemsInCart);


    });

});