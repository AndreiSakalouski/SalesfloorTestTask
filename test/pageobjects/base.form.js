/**
 * This class contains reusable web elements
 * with same locators in every form
 */

module.exports = class BaseForm {
    get userNameInput() {return $('#name')};
    get userEmailInput() {return $('#email')};
    get signUpCheckbox() {return $('#autoSubscribe')};
    get userPhoneInput() {return $('#phone')};
    get commentInput() {return $('#extraInfo')};
    get successMessageDiv() {return $('footer.fn-result-message div.global-services__validation__message')}

    async enterUserName(userName) {
        await (await this.userNameInput).waitForDisplayed({timeout: 5000});
        await (await this.userNameInput).setValue(userName);
    }

    async enterUserEmail(userEmail) {
        await (await this.userEmailInput).waitForDisplayed({timeout: 5000});
        await (await this.userEmailInput).setValue(userEmail);
    }

    async checkSignUpCheckbox() {
        await (await this.signUpCheckbox).click();
    }

    async enterUserPhone(userPhone) {
        await (await this.userNameInput).waitForDisplayed({timeout: 5000});
        await (await this.userPhoneInput).setValue(userPhone);
    }

    async enterComment(comment) {
        await (await this.commentInput).waitForDisplayed({timeout: 5000});
        await (await this.commentInput).setValue(comment);
    }

    async getSuccessMessage() {
        return (await this.successMessageDiv).getText();
    }
}
