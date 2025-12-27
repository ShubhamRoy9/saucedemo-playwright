class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.getByRole('textbox', {name: 'Username'});
        this.password = page.getByRole('textbox', {name: 'Password'});
        this.loginButton = page.getByRole('button', {name: 'Login'});
        // or 
        // this.loginButton = page.getByTestId('login-button');
        this.errorMessage = page.locator('[data-test="error"]');
        
    }

    async goto() {
        await this.page.goto('/');
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password)
        await this.loginButton.click();
    } 

    async getErrorMessage(){
        return await this.errorMessage.textContent();
    }
}

module.exports = { LoginPage };