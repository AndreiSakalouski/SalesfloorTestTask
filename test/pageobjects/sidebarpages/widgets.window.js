const BaseForm = require('../base.form');
const helper = require('../../utils/helper')

class WidgetsWindow extends BaseForm {
    get widgetsFrame() {return $('#sf-services-landing')}
    get personalShopperLink() {return $('#landing-finder-link')}
    get storeSelect() {return $('#store')}
    get budgetInput() {return $('#minBudgetText')}
    get submitButton() {return $('button[type=submit]')}

    async clickPersonalShopperLink() {
        await browser.switchToFrame(await this.widgetsFrame);
        await (await this.personalShopperLink).click();
    }

    async selectStore(storeName) {
        await (await this.storeSelect).waitForDisplayed({timeout: 5000});
        await (await this.storeSelect).selectByAttribute('value', storeName);
        await helper.waitForPageToLoad(10000);
    }

    async enterBudget(budget) {
        await (await this.budgetInput).setValue(budget);
    }

    async clickSubmitButton() {
        await (await this.submitButton).waitForClickable({timeout: 5000})
        await (await this.submitButton).click();
    }
}

module.exports = new WidgetsWindow();
