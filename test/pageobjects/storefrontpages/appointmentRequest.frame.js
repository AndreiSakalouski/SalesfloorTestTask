const BaseForm = require('../base.form');

class AppointmentRequestFrame extends BaseForm {
    get appointmentTimeSelect() {return $('#choosenTime')};
    get datePicker() {return $('#choosenDatePlaceholder')}
    get datepickerMonth() {return $('span.ui-datepicker-month')}
    get nextMonthButton() {return $('a.ui-datepicker-next')}
    get submitButton() {return $("form[title='Book an Appointment Form'] button[type=submit]")}

    async chooseAppointmentType(appointmentType) {
        const appointmentTypeElement = await $(`#${appointmentType}Service + label`)
        await (await appointmentTypeElement).click();
    }

    async chooseAppointmentDate(appointmentDate) {
        await (await this.datePicker).click();
        await this.chooseDesiredMonth(appointmentDate.month);
        await this.clickDesiredDay(appointmentDate.day);
    }

    async chooseDesiredMonth(month) {
        while (await (await this.datepickerMonth).getText() !== month) {
            await (await this.nextMonthButton).click();
        }
    }

    async clickDesiredDay(day) {
        await (await $(`=${day}`)).click();
    }

    async chooseAppointmentTime(appointmentTime) {
        await (await this.appointmentTimeSelect).selectByAttribute('value', appointmentTime);
    }

    async clickSubmitButton() {
        await (await this.submitButton).click();
    }
}

module.exports = new AppointmentRequestFrame();
