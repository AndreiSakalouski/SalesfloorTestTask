const SidebarPage = require('../pageobjects/sidebarpages/sidebar.page');
const {fourthTestConfig} = require('../configs/testconfigs/testConfig')
const {testUser} = require('../configs/testconfigs/testConfig')

describe('Storefront page', () => {

    it('Validate "Personal Shopper" form', async () => {
        await SidebarPage.open();
        await SidebarPage.clickOnWidgetAndOpenNewWindow();
        await SidebarPage.widgetsWindow.clickPersonalShopperLink();
        await SidebarPage.widgetsWindow.selectStore(fourthTestConfig.storeValue);
        await SidebarPage.widgetsWindow.enterUserName(testUser.userName);
        await SidebarPage.widgetsWindow.enterUserEmail(testUser.userEmail);
        await SidebarPage.widgetsWindow.checkSignUpCheckbox();
        await SidebarPage.widgetsWindow.enterBudget(fourthTestConfig.budget);
        await SidebarPage.widgetsWindow.enterUserPhone(testUser.phone);
        await SidebarPage.widgetsWindow.enterComment(testUser.comment);
        await SidebarPage.widgetsWindow.clickSubmitButton();
        await expect(await SidebarPage.widgetsWindow.getSuccessMessage()).toEqual(fourthTestConfig.expectedSuccessMessage)
    }, 3);
});
