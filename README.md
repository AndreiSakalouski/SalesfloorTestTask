# Test task for Salesfloor

## Executing:
```
npm install && npm run test
```

## Execution steps:

## Storefront tests:
### Validate "Live Chat" status text and color:
* Open Storefront page;
* Verify Live Chat status is "Unavailable";
* Verify that the text color is red.

### Validate "Appointment Request" form:
* Open Storefront page;
* Click Appointment Request link;
* Choose appointment type "Phone";
* Choose appointment day one week from now;
* Choose appointment time as 10 am;
* Enter data for name, email, phone, comment, sign up checkbox;
* Click "Send Request" button;
* Verify "Thank you for your request" message

### Validate "Get my updates" form:
* Open Storefront page;
* Click "Get My Updates" link;
* Enter data for name, email, sign up checkbox;
* Click "Send Request" button;
* Verify "Thank you!" message;


## Sidebar tests:
### Validate "Personal Shopper" form:
* Open Sidebar page;
* Click on widget and open new window;
* Click on "Personal Shopper" link;
* Select store = Toronto;
* Enter Budget = 100;
* Enter name, email, sign up checkbox, phone, comment;
* Click "Send Request" button;
* Verify "Thank you for your request!" message;

## Author

Andrei Sakalouski
