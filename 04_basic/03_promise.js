// Promise:- Object

//  there are three state :- 

//  01. pending
//  02. fullfill
//  03. reject


// Promise properties:-

//  initial phase:- 
    // promise:object 
    // promiseState:pending or fullfill
    // promiseResult:undefined  or it is just a message


    // state:pending
    // result:undefined


    // const promise = new Promise((resolve, rejects) =>{
    //     setTimeout(() => {
    //         resolve("Success")
    //     }, 2000)
    // })

    // console.log(promise)  //Promise { <pending> }


    const promise = new Promise((resolve, rejects) =>{
        rejects("Error");
    })

    console.log(promise);