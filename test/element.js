describe("interaction with web element", function(){

    it("Enter Username, User password and click Login", function(){
        browser.url('/')
        const userName = $('#user-name');
        const userPassword = $('#password');

        const loginButton = $('#login_button_container > div > form > input.btn_action');    
        
        
        userName.setValue('standard_user');
        userPassword.setValue('secret_sauce');
        loginButton.click();
        browser.pause(5000);
        
    });

});