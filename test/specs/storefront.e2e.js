const StorefrontPage = require('../pageobjects/storefrontpages/storefront.page');
const {firstTestConfig} = require('../configs/testconfigs/testConfig')
const {secondTestConfig} = require('../configs/testconfigs/testConfig')
const {thirdTestConfig} = require('../configs/testconfigs/testConfig')
const {testUser} = require('../configs/testconfigs/testConfig')


describe('Storefront page', () => {
    beforeEach( async () => {
        await StorefrontPage.open();
    });

    it('Validate "Live Chat" status text and color', async () => {
        await expect(await StorefrontPage.liveChatStatus).toHaveText(firstTestConfig.expectedLiveChatStatusText);
        await expect(await StorefrontPage.getLiveChatStatusColor()).toEqual(firstTestConfig.expectedLiveChatStatusColor.Red);
    });

    it('Validate "Appointment Request" form', async () => {
        await StorefrontPage.clickAppointmentRequestLink();
        await StorefrontPage.appointmentRequestForm.chooseAppointmentType(secondTestConfig.appointmentType);
        await StorefrontPage.appointmentRequestForm.chooseAppointmentDate(secondTestConfig.appointmentDate)
        await StorefrontPage.appointmentRequestForm.chooseAppointmentTime(secondTestConfig.appointmentTime)
        await StorefrontPage.appointmentRequestForm.enterUserName(testUser.userName);
        await StorefrontPage.appointmentRequestForm.enterUserEmail(testUser.userEmail);
        await StorefrontPage.appointmentRequestForm.checkSignUpCheckbox();
        await StorefrontPage.appointmentRequestForm.enterUserPhone(testUser.phone);
        await StorefrontPage.appointmentRequestForm.enterComment(testUser.comment);
        await StorefrontPage.appointmentRequestForm.clickSubmitButton();
        await expect(await StorefrontPage.appointmentRequestForm.getSuccessMessage()).toEqual(secondTestConfig.expectedSuccessMessage)
    });

    it('Validate "Get my updates" form', async () => {
        await StorefrontPage.clickGetMyUpdatesLink();
        await StorefrontPage.getMyUpdatesForm.enterUserName(testUser.userName);
        await StorefrontPage.getMyUpdatesForm.enterUserEmail(testUser.userEmail);
        await StorefrontPage.getMyUpdatesForm.checkSignUpCheckbox();
        await StorefrontPage.getMyUpdatesForm.clickSendRequestButton();
        await expect(await StorefrontPage.getMyUpdatesForm.getSuccessMessage()).toEqual(thirdTestConfig.expectedSuccessMessage)
    });
});



