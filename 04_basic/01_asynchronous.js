// console.log("A");
// console.log("B");
// console.log("C");


// Syncronous JS:- 
// console.log("A");

// for(let i=0; i<10000000000; i++){

// }

// console.log("B");     // print B but its take to much time that's why we use asyn.

// asyncronous JS:- Its print A C And B but B print take some time.
//  1000 => 1 sec,  2000 => 2sec

// console.log("A")

// setTimeout(()=>{
//     console.log("B");
// }, 2000)

// console.log("C");



// function recursion(){
//     console.log("Code chalao..");
// }

// function start(){
//     recursion();
//     console.log("Code khatam!!!");
// }

// start();

// function one(){
//     two();
// }

// function two(){
//     three()
// }

// function three(){
//     console.log("Khel khatam...")
// }

// one();

// Stack overflow:- 

// function test(){
//     test()
// }
// test()   //RangeError: Maximum call stack size exceeded


// js code -> call stack -> async operation -> browser handles waiting
// -> callback ready -> queue -> event loop -> callstack enpty

// Two type of Queue :- microtask queue and Task queue.


// console.log("1-one")

// setTimeout(()=>{              //task queue
//     console.log("2-two");
// }, 0)

// Promise.resolve().then(()=>{   // microtask queue
//     console.log("3-three");
// })

// console.log("4-four");

// Async Callbacks

// 1. Microtask Queue → Higher scheduling priority.
//                     Promise, callbacks etc.

// 2. Task Queue → Lower scheduling priority.
//                 setTimeout, DOM Events etc.


// Example:- 

// Promise.resolve().then(()=>{
//     console.log("A");

//     Promise.resolve().then(()=>{
//         console.log("B")
//     })
// })

// Promise.resolve().then(()=>{
//     console.log("C")
// })

// Output

// A
// C
// B