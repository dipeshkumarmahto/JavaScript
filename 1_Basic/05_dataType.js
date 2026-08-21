// Data Type:- 

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