// Data Type:- 

const { type } = require("node:os");

// A. Primitive data type:-


// 01. String
// let name = "Dipesh"
// console.log(name)        //Dipesh


// 02. Number
let num = 1234;
// console.log(num);        //1234

// 03. Boolean
const isLogin = true;
// console.log(isLogin);       //true

// 04. Null
const outsideTemp = null;
// console.log(outsideTemp)    //null

// 05. undefined
let userEmail;
// console.log(userEmail)      //undefined

// 06. Symbol
let user1 = Symbol('123')
let user2 = Symbol('123')
// console.log(user1 === user2);   //false


// 07. BigInt
let bigNumber = 123456787855459n;


// B. Non-primitive or reference:-

// 01. Arrays
const heros = ["Dipesh", "Samresh"]
// console.log(heros)                   //['Dipesh', 'Samresh']


// 02. Objects
const myObj = {
    name:"Dipesh",
    age:21
}
// console.log(myObj.name, myObj.age);      // Dipesh  21


// 03. Functions
let myFunction = function(){
    console.log("Hello World");
}
// myFunction();

// check dataType using (typeof)

// console.log(typeof outsideTemp);  //object


// ************************ Memory *****************************

// There are two types of memory :- 

// 1. Stack =>The Stack is used to store primitive values and information about function calls/execution.
//  All primitive data type(Number, String, Boolean, Null, Undefined, Symbol, BigInt)

// eg:-

let myName = "Dipesh";

let anotherName = myName;

anotherName = "Samresh"

// console.log(myName)
// console.log(anotherName)

// 2. Heap  => The Heap is used for objects and other dynamically allocated data.
// All Non-primitive data type(Objects, Function, Arrays)

// eg:-

let userOne = {
    name:"Samresh",
    email:"samresh@gmail.com"
}

let userTwo = userOne;

userTwo.email = "dipesh@gmail.com"

console.log(userOne)
console.log(userTwo)