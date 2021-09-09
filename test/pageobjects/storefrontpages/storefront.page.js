const BasePage = require('../base.page');
const storefrontUrl = require('../../configs/globalconfigs/globalProperties').storefrontUrl;
const AppointmentRequestFrame = require('./appointmentRequest.frame');
const GetMyUpdatesFrame = require('./getMyUpdates.frame');

class StorefrontPage extends BasePage {

    appointmentRequestForm = AppointmentRequestFrame;
    getMyUpdatesForm = GetMyUpdatesFrame;

    get liveChatStatus() {return $('div.status > span')}
    get appointmentRequestLink() {return $('#AtAppointmentLink')}
    get appointmentFrame() {return $('#bookAnAppointment')}
    get getMyUpdatesLink() {return $('li > a[data-modal-open=inscriptionModal]')}
    get getMyUpdatesFrame() {return $('#inscription')}


    async getLiveChatStatusColor() {
        return (await (await this.liveChatStatus).getCSSProperty('color')).parsed.hex;
    }

    async clickAppointmentRequestLink() {
        await (await this.appointmentRequestLink).click();
        await browser.switchToFrame(await this.appointmentFrame);
    }

    async clickGetMyUpdatesLink() {
        await (await this.getMyUpdatesLink).click();
        await browser.switchToFrame(await this.getMyUpdatesFrame);
    }



    open() {
        return super.open(storefrontUrl);
    }
}

module.exports = new StorefrontPage();
