var c = 300
let a = 200

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)  //ReferenceError: a is not defined
// console.log(b)   //ReferenceError: b is not defined  
// console.log(c)   // 30


function one(){
    const username = "Dipesh"
    console.log(username)
    function two(){
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website)   //ReferenceError: website is not defined
    // two()  //Dipesh youtube
}
// one() //Dipesh

if(true){
    const username = "dipesh"

    if(username==="dipesh"){
        const website = " youtube"
        // console.log(username + website)    //dipesh youtube
    }
    // console.log(website)    //ReferenceError: website is not defined
}
// console.log(username)   //ReferenceError: username is not defined



// *****interesting*********

// addOne(1) // normal function me koi error nahi aayega 

function addOne(num) {
    return num + 1;
}

// addTwoNumber(2)  //ReferenceError: addTwoNumber is not defined

// jab kisi variable me store karenge toh error dega


const addTwo = function addTwo(num2){
    return num2 + 2    
}
