class LoginPage{
    get userName(){ return $('#user-name');}
    get userPassword() { return $('#password');}
    get loginButton(){ return $('#login_button_container > div > form > input.btn_action')}

    enterUserName(text){
        //Wait for username and send the username value 
        this.userName.waitForDisplayed();
        this.userName.setValue(text);
    }

    enterUserPassword(text){
        //Wait for password and send the password value 
        this.userPassword.waitForDisplayed();
        this.userPassword.setValue(text);
    }

    clickOnLogin()
    {
        //Wait for the button to be displayed and then click to login
        this.loginButton.waitForDisplayed();
        this.loginButton.click();
    }

}

module.exports = new LoginPage();