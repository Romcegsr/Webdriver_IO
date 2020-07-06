class ProductPage {

    get productPageLabel() { return $('#inventory_filter_container > div');}
    get shoppingCart() { return $('#shopping_cart_container');}
    get productSortContainer() { return $('#inventory_filter_container > select');}
    get productListTop() { return $('#inventory_container > div.inventory_list');}
    get productChild(){ return this.productListTop.$$('div');}

    get lowestPricedItem1(){return $('#inventory_container > div > div:nth-child(2) > div.pricebar');}
    get lowestPricedItem2(){return $('#inventory_container > div > div:nth-child(5) > div.pricebar');}
}

module.exports = new ProductPage();