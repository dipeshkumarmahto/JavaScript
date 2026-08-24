// singleton 

const { log } = require("console")

// Object.create:- we use this method

// const tinderUser = new Object()   // we can create  a object using this mew keyword

const tinderUser = {}               // also using curly brecess

tinderUser.id = "123abs"
tinderUser.name = "Dipesh"
tinderUser.isLoggin = false

// console.log(tinderUser)

const regularUser = {
    email:"dipesh@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Dipesh",
            lastname:"kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)   //Dipesh

// console.log(regularUser.fullname.userfullname.lastname)   //kumar

// *******merge object**********

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {4:"e", 5:"f"}

const obj7 = {obj1, obj2, obj3}
                  
/* 

console.log(obj7)
{
  obj1: { '1': 'a', '2': 'b' },
  obj2: { '3': 'c', '4': 'd' },
  obj3: { '4': 'e', '5': 'f' }
}
*/


// ***using Spread:- 90% time we use this method***
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)                           //{ '1': 'a', '2': 'b', '3': 'c', '4': 'e', '5': 'f' }

//most used syntax when Database se jab value aayegi..


// Array ka Object aata  hai 

const users = [
    {
        id:1,
        email:"dipesh@gmial.com"
    },
    {
        id:2,
        email:"dipesh@gmial.com"
    },
    {
        id:3,
        email:"dipesh@gmial.com"
    },
    {
        id:4,
        email:"dipesh@gmial.com"
    },
    {
        id:5,
        email:"dipesh@gmial.com"
    },
]

// console.log(users[1]);    //  { id: 2, email: 'dipesh@gmial.com' }


// first we acces array using index, than we use . (dot) to acces object.
// console.log(users[1].email);   //  dipesh@gmial.com


 // put in array :- keys, values, entries
// console.log(Object.keys(tinderUser))   // [ 'id', 'name', 'isLoggin' ]
// console.log(Object.values(tinderUser))   // [ '123abs', 'Dipesh', false ]

// console.log(Object.entries(tinderUser))   // [ [ 'id', '123abs' ], [ 'name', 'Dipesh' ], [ 'isLoggin', false ] ]


// console.log(tinderUser.hasOwnProperty("isLoggin"))   //true

// console.log(tinderUser.hasOwnProperty("isLogged"))     //false


// **********Object destructuring & Json API

const course = {
    coursename:"javaScript",
    courseInstructor:"hitesh sir",
    fees:999
}

// yanha ham baar baar course. use kare rhe hai 
console.log(course.courseInstructor, course.coursename, course.fees)   //hitesh sir javaScript 999

// now, we use object destructure

const {courseInstructor, fees, coursename} = course

console.log(courseInstructor, coursename, fees)  //hitesh sir javaScript 999

// ***********API  JSON*************

/*
API  :-  Application Programming Interface
JSON :-  JavaScript Object Notation


 JSON ke format me 
{
    "name":"Dipesh",
    "age":21,
    "coursename":"javaScript"
}

Array ke format me

[
    {},
    {}, 
    {}, 
]
*/

