// learning function 
// normal function
// arrow function


function add(num1:number, num2:number):number{
return num1 + num2;

}

console.log(add(1,3))

// arrow function

const addTwoNumbers = (num1:number, num2:number):number=>num1+num2;

console.log(addTwoNumbers(3,5))


// method
// when a function in an object is called method.

const poorUser= {
name:'mahim',
balance:0,
deposit(balance:number):string{
  return `MY NEW BALANCE IS: ${this.balance+balance}`;
}}

console.log(poorUser.deposit(100))