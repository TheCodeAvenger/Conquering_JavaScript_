// alert("heyy krishna");


console.log(typeof null); // will show "object" as type
console.log(typeof undefined); // undefined
let y = 24;
console.log(typeof y); 


// primitive

//  7 types -> string , number , boolean , boolean , null , undefined , symbol , BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail ;

// symbol -> mostly used in react or other frontend libraries
const id = Symbol('123');
const anotherId = Symbol('123');

console.log( id=== anotherId);
// both are different , even thought them have same value

// const bigNumber = n354587557476474435365565n;


// non-primitive

const heroes = ["Batman" , "Spiderman" , "thor"]  //array

// object -> key-value pair
let myObj = {
    name : "Krishna" ,
    age: 20,
}

const myfunc = function(){
    console.log("Hello world");
}

// " typeof " operator used to find datatype 

console.log( typeof myObj);
console.log( typeof myfunc);
console.log( typeof outsideTemp); // "null" ka datatype "object " dikhega
console.log( typeof isLoggedIn);
console.log( typeof scoreValue);
