// Destructuring
{


  const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY'
    }
  };
  
  const {firstName,address:{street,city,state}}=user;

  console.log(  firstName + " " + street + " " +city)
  
  

}