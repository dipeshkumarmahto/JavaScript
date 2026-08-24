// *********** Object *********

// singleton 
// Object.create - we will talk later about this

// Objecgt literals:- its have Keys, and value

const mySym = Symbol("key1")

const jsUser = {
    name:"Dipesh",
    "full name" : "Dipesh Kumar Mahto",
    [mySym]:"MyKey1",                           // representation of symbol in object
    age:21,
    email:"dipesh@gmail.com",
    location:"vadodara",
    isLogin:false,
    lastLoginDays:["Monday", "Tuesday"]
}

// console.log(jsUser.name)                // begginer level
// console.log(jsUser["name"])             // senior level
// console.log(jsUser["full name"])        //senior level
// console.log(typeof jsUser[mySym]);      // string
// console.log(jsUser[mySym])              //MyKey1

jsUser["email"] = "dipesh@chatgpt.com"
// console.log(jsUser["email"]);               //we can change the prev value

// we can also freeze the value, after freezeing value, we cant change the value

// Object.freeze(jsUser);
jsUser.email = "dipesh@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello world")
}

jsUser.greetingtwo = function(){
    console.log(`Hello, good morning ${this.name}`)
}

console.log(jsUser.greeting)         // [Function (anonymous)]
console.log(jsUser.greeting())        //Hello world

// console.log(jsUser.greetingtwo())  //Hello, good morning Dipesh