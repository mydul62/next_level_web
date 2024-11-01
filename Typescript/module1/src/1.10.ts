{
// 

// Union

type FrontEndDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
type FullStackDeveloper = 'fakibazDeveloper' | 'juniorfrontendDeveloper';

type newDeveloper = FrontEndDeveloper | FullStackDeveloper;

const newDeveloper: FrontEndDeveloper= "juniorDeveloper";

type User = {
  name: string;
  email: string;
  gender: "male" | "female";
  age: number;
  bloodGroup: "ab+" | "o+"| "A+";
}


const user:User ={
  name: "John Doe",
  email: "john.doe@example.com",
  gender: "male",
  age: 30,
  bloodGroup: "ab+"

}


// Intersection

type BackendDeveloper = {
  skills: string[];
  designation1: string;
}
type FullStackDeveloperr = {
  skills: string[];
  designation2: string;
}

type Developer = BackendDeveloper & FullStackDeveloperr;

const fullstackdeveloper:Developer={
   designation1:'frontendDeveloper',
   designation2:'backendDeveloper',
   skills:['typescript', 'node.js', 'express.js'],
   
}






// 



}
  
  
  
  
  
  
