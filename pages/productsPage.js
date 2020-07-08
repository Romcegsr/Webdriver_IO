class ProductPage {

    get productPageLabel() { return $('#inventory_filter_container > div'); }
    get shoppingCart() { return $('#shopping_cart_container');}
    get productSortContainer() { return $('#inventory_filter_container > select');}
    // get productListTop() { return $('#inventory_container > div.inventory_list');}
    //get productChild(){ return this.productListTop.$$('div');}
  
    get lowestPricedItem1() {return $('#inventory_container > div > div:nth-child(6) > div.pricebar > button');}
    get lowestPrice1() {return $('#inventory_container > div > div:nth-child(6) > div.pricebar');}


    get lowestPrice2() {return $('#inventory_container > div > div:nth-child(5) > div.pricebar');}
    get lowestPricedItem2() {return $('#inventory_container > div > div:nth-child(5) > div.pricebar > button');}
    

    clickOnLowestItem1()
    {
        this.lowestPricedItem1.waitForDisplayed();
        this.lowestPricedItem1.click();
    }
    clickOnLowestItem2()
    {
        this.lowestPricedItem2.waitForDisplayed();
        this.lowestPricedItem2.click();
    }

    clickOnShoppingCart()
    {
        this.shoppingCart.waitForDisplayed();
        this.shoppingCart.click();
    }

    
}

module.exports = new ProductPage();