class shoppingCart{
    get cartHeader() { return $('#contents_wrapper > div.subheader');}
    get itemsInCart() { return $('#shopping_cart_container > a > span')}
    get cheapestItemPrice(){
        return $('#cart_contents_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label > div.item_pricebar > div');
    }
    get cheapestItemButton() {
        return $('#cart_contents_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label > div.item_pricebar > button');
    }
    get chekoutButton() {
        return $('#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button');
    }

    clickOnRemoveCheapestItem()
    {
        this.cheapestItemButton.waitForDisplayed();
        this.cheapestItemButton.click();
    }

    clickOnCheckout()
    {
        this.chekoutButton.click(); 
    }
}

module.exports = new shoppingCart();