const loginPage = require("../pages/loginPage");
const productsPage = require("../pages/inventoryPage");
const shopCartPage = require("../pages/shoppingCartPage");
const informPage = require("../pages/checkOutPage");
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
            //Better option to verify the dropdown option selected is correct
            //assert.exists('(high to low)', productsPage.productSortContainer.getText('option:checked'));
        
    });

    it("Add two products with lowest value to cart",()=>{
            // Verify the price of the lowest priced item is $7.99 and then add the item to cart
            assert.exists('$7.99', productsPage.lowestPrice1.getText());
            productsPage.clickOnLowestItem1();

            //Verify if the product has been already added to cart
            assert.equal('REMOVE',productsPage.lowestPricedItem1.getText());
   
             // Verify the price of the second lowest priced item is $9.99 and then add the item to cart 
            assert.exists('$9.99', productsPage.lowestPrice1.getText());
            productsPage.clickOnLowestItem2();

            //Verify if the product has been already added to cart
            assert.equal('REMOVE',productsPage.lowestPricedItem2.getText());    
    });

    it("Open the shopping cart", ()=>{
    //Open the basket and verify if 2 items are added to it
    productsPage.clickOnShoppingCart();
    //Check if shopping cart has 2 items
    assert.equal('2',shopCartPage.itemsInCart.getText());
    });

    it("Remove the cheapest item from the cart",()=>{
    //Remove the cheapest item from the cart    
    shopCartPage.clickOnRemoveCheapestItem();
    //Only One item in the cart remaning
    assert.equal('1',shopCartPage.itemsInCart.getText());   
    });

    it("Click on the checkout button",()=>{
     shopCartPage.clickOnCheckout(); 
    });

    it("Verify if the page has Checkout: Your Information", ()=>{
        assert.exists('Your Information',informPage.pageHeader.getText());
    });

});