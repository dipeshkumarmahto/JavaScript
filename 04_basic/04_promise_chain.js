// PROMISE CHAINING

// 1. Student data
// 2. Student marks
// 3. Student result

// const promise = new Promise((resolve, rejects)=> {
//     resolve("Hello");
// })

// promise.then((data) =>{
//     console.log(data)
//     return "How are you" // new promise return hoga
// })

// .then((data) =>{
//     console.log(data);
//     return "i am fine"
// })

// .then((data)=>{
//     console.log(data);
// })

// Hello
// How are you
// i am fine

// let p1 = new Promise((resolve, rejects)=>{
//     resolve(10);
// })
// .then((res)=>{
//     console.log(res);
//     return res*2; // new promise created
// })
// .then((res)=>{
//     console.log(res)
//     res + 2;
// })

// .then((res)=>{
//     console.log(res)
// })

// 10
// 20
// undefined

// Example:- 

function getBread(){
    return new Promise((resolve, rejects)=>{
        setTimeout(() =>{
            console.log("Buy Bread.")
            resolve("Bread")
        }, 2000)
    })
}

function getButter(){
    return new Promise((resolve, rejects)=>{
        setTimeout(()=>{
            console.log("Buy butter.")
            resolve("Butter")
        }, 2000)
    })
}

function getVegi(){
    return new Promise((resolve, rejects)=>{
        setTimeout(()=>{
            console.log("Buy Vegitable.")
            resolve("Vegitable")
        }, 2000)
    })
}
// function getSandwich(){
//     return new Promise((resolve, rejects)=>{
//         setTimeout(()=>{
//             console.log("Sandwich is not ready")
//             rejects("Sandwich")
//         }, 2000)
//     })
// }

// function makeSandwich(){
//     return new Promise((resolve, rejects)=>{
//         setTimeout(()=>{
//             console.log("Sandwich is cook")
//             resolve("Sandwich")
//         }, 2000)
//     })
// }


//  ye ak baar me chal jayega 2 sec me

// getBread()
// .then((res)=>{
//     console.log("Got:", res)
// })

// getButter().then((res)=>{
//     console.log("Got:", res)
// })

// getVegi().then((res)=>{
//     console.log("Got:", res)
// })

// or ye time lega 2, 2 second haar promise me

getBread()
.then((res)=>{
    console.log("Got", res)
    return getButter()
})

.then((res)=>{
    console.log("Got", res)
    return getVegi()
})
.catch((err)=>{
    console.log(err)
})

// for running all promise in just one promise using promiseAll