import * as assert from '@helper/asserts';
import * as element from '@helper/element';
import * as route from '@helper/route';
import { ROUTES } from '@tests/const/routes';
import * as login from '@tests/data/login.data';
import * as loginPage from '@tests/page/login.page';

describe('login Test', () => {
    beforeEach(() => {
        route.visit(ROUTES.login);
    });
    it('Ensure the error message is displayed when user entered invalid login data', () => {
        element.fillField(loginPage.usernameField, login.INVALID_LOGIN_DATA.username);
        element.fillField(loginPage.passwordField, login.INVALID_LOGIN_DATA.password);
        element.click(loginPage.loginButton);
        assert.shouldContainText(loginPage.errorMessage, "Epic sadface: Username and password do not match any user in this service");
    })
})