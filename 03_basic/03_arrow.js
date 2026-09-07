
// this:- this is a special keyword that refers to the object that is currently executing the function. 
//         Its value depends on how the function is called.

// const user = {
//     name:"Dipesh",
//     age:21,
//     welcome: function(){
//         console.log(`${this.name}, welcome to my WebSite`)
//     }
// }

// user.welcome();       // Dipesh, welcome to my WebSite
// user.name = "Sam"
// user.welcome();      // Sam, welcome to my WebSite

// console.log(this)   //  {}


// function chai(){
//     console.log(this);
// }

// chai();  // it give so many thing like global etc.
// function chai(){
//     name:"Dipesh"
//     console.log(this.name);
// }

// chai()  //  undefined


// Arrow function: An arrow function is a shorter way to write a function in JavaScript.
//  It was introduced in ES6.

const chai = () =>{
    let name="Dipesh"
    console.log(this.name);
}

// chai()  // undefined


// Explicit Function: Function jisme return keyword clearly likha jata hai.

// const add = (a, b) =>{
//     return a+b;
// }

// console.log(add(1, 6));  // 7


// Implicit Function: Function jisme return keyword nahi likhna padta.
//                    Usually arrow function me use hota hai.
const add = (a, b) => (a+b)

// console.log(add(1, 6))  // 7