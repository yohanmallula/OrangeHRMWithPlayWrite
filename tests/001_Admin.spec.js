const { test, expect } = require("../fixtures/baseTest");
const Admin = require("../pages/Admin");
const LoginPage = require("../pages/LoginPage");

test.describe("Admin option ", () => {
  test("Serach the employs", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login("Admin", "admin123");

    await expect(loginPage.dashboardHeader).toBeVisible();

    const admin = new Admin(page);
    await admin.admin_Option();
  });
});
