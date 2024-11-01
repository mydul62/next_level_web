"use strict";
// learning function 
// normal function
// arrow function
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 3));
// arrow function
var addTwoNumbers = function (num1, num2) { return num1 + num2; };
console.log(addTwoNumbers(3, 5));
// method
// when a function in an object is called method.
var poorUser = {
    name: 'mahim',
    balance: 0,
    deposit: function (balance) {
        return "MY NEW BALANCE IS: ".concat(this.balance + balance);
    }
};
console.log(poorUser.deposit(100));
