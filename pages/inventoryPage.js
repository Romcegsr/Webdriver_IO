class ProductPage {
    // Selectors and Methods for page :https://www.saucedemo.com/inventory.html

    get productPageLabel() { return $('#inventory_filter_container > div'); }
    get shoppingCart() { return $('#shopping_cart_container');}
    get productSortContainer() { return $('#inventory_filter_container > select');}
    //Lowest priced item( TODO :future this selector can be improved)
    get lowestPricedItem1() {return $('#inventory_container > div > div:nth-child(6) > div.pricebar > button');}
    get lowestPrice1() {return $('#inventory_container > div > div:nth-child(6) > div.pricebar');}

    get lowestPrice2() {return $('#inventory_container > div > div:nth-child(5) > div.pricebar');}
    get lowestPricedItem2() {return $('#inventory_container > div > div:nth-child(5) > div.pricebar > button');}
    
    clickOnLowestItem1()
    {
        //Wait for item to be displayed and then click/add the item to cart
        this.lowestPricedItem1.waitForDisplayed();
        this.lowestPricedItem1.click();
    }

    clickOnLowestItem2()
    {
        //Wait for item to be displayed and then click/add the item to cart
        this.lowestPricedItem2.waitForDisplayed();
        this.lowestPricedItem2.click();
    }

    clickOnShoppingCart()
    {
        //Wait for the shopping cart to be displayed and click on it to load
        this.shoppingCart.waitForDisplayed();
        this.shoppingCart.click();
    }
 
}

module.exports = new ProductPage();