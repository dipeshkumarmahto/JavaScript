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

console.log("A")

setTimeout(()=>{
    console.log("B");
}, 2000)

console.log("C");