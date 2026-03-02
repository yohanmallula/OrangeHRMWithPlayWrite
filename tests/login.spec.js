
const { test, expect } = require('../fixtures/baseTest');
const LoginPage = require('../pages/LoginPage');

test.describe('OrangeHRM Login Tests', () => {

  test('Valid Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.login('Admin', 'admin123');

    await expect(loginPage.dashboardHeader).toBeVisible();

  });

  test('Invalid Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.login('Admin', 'wrongpass');

    await expect(loginPage.errorMessage).toBeVisible();

  });

});