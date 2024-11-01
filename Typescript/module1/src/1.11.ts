// note : use ts node dev to see in console https://www.npmjs.com/package/ts-node-dev

{
// 

// tarnary oparator || optiobal chaining || nulish oparator


const age :number = 19;

if(age>18){
  console.log('adult')
  
}else{
console.log("underAge")

}

// nulish  coalescing oparator

const isAuthenticated ="";

const result = isAuthenticated ?? "guest;" 
// only work on undefined and null 
const result2 = isAuthenticated ? isAuthenticated : "guest;"
//  work on any false value

console.log({result,result2})










// 
}