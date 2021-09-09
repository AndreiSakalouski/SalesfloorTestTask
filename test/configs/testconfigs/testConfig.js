/**
 * Test input
 */

const moment = require('moment/moment');

module.exports = {

    testUser: {
        userName: 'John Doe',
        userEmail: 'JohnDoe@gmail.com',
        phone: '+1-204-502-2021',
        comment: "I'm looking for a blue jacket"
    },

    firstTestConfig: {
        expectedLiveChatStatusText: 'Unavailable',
        expectedLiveChatStatusColor: {Red: '#ee0c0c'}
    },

    secondTestConfig: {
        appointmentType: 'phone',
        appointmentDate: {
            desiredDate: moment().add(1, 'week'),
            get day() {
                return this.desiredDate.format('D')
            },
            get month() {
                return this.desiredDate.format('MMMM')
            }
        },
        appointmentTime: '10:00 PM',
        expectedSuccessMessage: 'Thank you for your request!\nYou should receive a response shortly.'
    },

    thirdTestConfig: {
        expectedSuccessMessage: 'Thank you!\nYou are now signed up'
    },

    fourthTestConfig: {
        storeValue: '1001',
        budget: 100,
        expectedSuccessMessage: 'Thank you for your request!\nYou should receive a response shortly.'
    }
}
