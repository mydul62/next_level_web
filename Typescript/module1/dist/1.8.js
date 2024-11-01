"use strict";
// Destructuring
{
    var user_1 = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY'
        }
    };
    var firstName = user_1.firstName, _a = user_1.address, street = _a.street, city = _a.city, state = _a.state;
    console.log(firstName + " " + street + " " + city);
}
