{

// Type alias

type Student1= {
  name:string;
  age:number;
 grade:string;
  subjects:string[];
  address: {
    street:string;
    city:string;
    zipcode:number;
  };
};
  
  const student1: Student1 = {
    name: "John Doe",
    age: 18,
    grade: "A",
    subjects: ["Math", "Science", "English"],
    address: {
      street: "123 Main St",
      city: "New York",
      zipcode: 12345,
    },

  

}

type Add =(num1: number, num2: number)=>number

const add:Add= (num1,num2)=>num1+num2;

}
