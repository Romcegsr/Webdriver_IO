class LoginPage{
    get userName(){ return $('#user-name');}
    get userPassword() { return $('#password');}
    get loginButton(){return $('#login_button_container > div > form > input.btn_action')}

    enterUserName(text){
        this.userName.waitForDisplayed();
        this.userName.setValue(text);
    }

    enterUserPassword(text){
        this.userPassword.waitForDisplayed();
        this.userPassword.setValue(text);
    }

    clickOnLogin()
    {
        this.loginButton.waitForDisplayed();
        this.loginButton.click();
    }

}

module.exports = new LoginPage();