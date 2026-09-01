// Callback:- Function pass argument as a function.

function start(callback){
    callback();
}

function sayHi(){
    console.log("Hello");
}

start(sayHi)


// callback hell:- Pyramid of Doom  

// 1
//     2
//         3
//             4
//                 5
//                 5
//             4
//         3
//     2
// 1
// Disadvantages of callback:-
//     01. Readability
//     02. Maintanability
//     03. error handling complex

