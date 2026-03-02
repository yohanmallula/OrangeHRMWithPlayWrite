

class Admin {

    constructor(page)  {
        this.page = this.page;


         // Locators
         this.Admin = page.locator('//a[@class="oxd-main-menu-item active"]');
    }

    async admin_Option() {

            await this.Admin.click();
    }

}


module.exports = Admin;
