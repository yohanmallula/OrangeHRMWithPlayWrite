const base = require('@playwright/test');

exports.test = base.test.extend({

  page: async ({ page }, use) => {

    // Automatically open login page before every test
       await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await use(page);
  }

});

exports.expect = base.expect;