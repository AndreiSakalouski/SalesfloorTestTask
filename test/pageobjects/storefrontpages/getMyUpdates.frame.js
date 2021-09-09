const BaseForm = require('../base.form');

class GetMyUpdatesFrame extends BaseForm {
    get sendRequestButton() {return $('form[name=newsletterInscription] button')}

    async clickSendRequestButton() {
        await (await this.sendRequestButton).click();
    }
}

module.exports = new GetMyUpdatesFrame();
