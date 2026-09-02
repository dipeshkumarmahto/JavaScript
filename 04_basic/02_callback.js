// Callback:- Function pass argument as a function.

// function start(callback){
//     callback();
// }

// function sayHi(){
//     console.log("Hello");
// }

// start(sayHi)


// callback hell:-  jab multiple depandent asyn operation ko callback k through 
//                  ak 

// Pyramid of Doom  

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

// function greet(){
//     console.log("hello")
// }

// function start(callback){
//     callback();
// }

// start(great)


// agar multiple function ko callback karna hai toh
//  ham ()={ } arraor function use karenge esko hi callback hell bolte hai 


/*

function getBread(callback){
    setTimeout(()=>{
        console.log("Bread mile gya");
        callback()
    }, 2000)
}

function getButter(callback){
    setTimeout(()=>{
        console.log("Butter mile gya");
        callback()
    }, 2000)
}

function getVegi(callback){
    setTimeout(()=>{
        console.log("vegitable mile gya");
        callback()
    }, 2000)
}

function makeSandwich(callback){
    setTimeout(()=>{
        console.log("Sandwich is ready..");
        callback()
    }, 2000)
}

getBread(() =>{
    getButter(() =>{
        getVegi(() =>{
            makeSandwich(() =>{
                console.log("Ready to eat...");
            })
        })
    })
})

Bread mile gya
Butter mile gya
vegitable mile gya
Sandwich is ready..
Ready to eat...

*/



// Disadvantages of callback:-
//     01. Readability
//     02. Maintanability
//     03. error handling complex
//     04. Debuging

// solution -> promise

// 1. order placed hua -> Promise (pending)
// 2. restaurant 

// let order = new Promise((resolve, reject)=>{
//     let success = true;

//     if(success){
//         resolve("Order is accept")
//     }else{
//         reject("Order is cancled")
//     }
// })

// console.log(order)   //  output :- Promise { 'Order is accept' }


// let order = new Promise((resolve, reject)=>{
//     let success = false;

//     if(success){
//         console.log("A")
//         setInterval(()=>{
//             resolve("Order is accept")
//         }, 2000)
       
//     }else{
//         reject("Order is cancled")
//     }
// })
// console.log(order)  // Promise { <pending> }


// setTimeout(() => {
//     console.log(order)
// }, 3000)




// .then() -> when the problem is resolved than we run .then()
// .catch() -> if the promise is reject than .catch() will run
// .finally() -> this block run every time either the condition is reect or resolve 

// let order2 = new Promise((resolve, rejects) =>{
//     rejects("Order is canceled")
// })

// order2.then((msg) =>{
//     console.log(msg)
// })

// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("Order process complete")
// })

// Order Placed
// Order process complete


// let order3 = new Promise((resolve, rejects) =>{
//     resolve("Order Placed")
// })

// order3.then((msg) =>{
//     console.log(msg)
// })

// .catch((err)=>{
//     console.log(err)
// })

// .finally(()=>{
//     console.log("Order process complete")
// })

// // Order Placed
// // Order process complete

