function myName(){
    console.log("Dipesh")
    console.log("Dipesh")
    console.log("Dipesh")
    console.log("Dipesh")
}

// myName()

// function addTwoNumber(num1, num2){
//     console.log(num1+num2)
// }

// addTwoNumber(3, 4)


function addTwoNumber(num1, num2){
    // let result = num1+num2
    // return result
    
    return num1+num2
}

let ans = addTwoNumber(3, 4)
// console.log(ans);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter username.")
        return
    }
    return `${username} just logged in`
}

// let loggin = loginUserMessage("Dipesh")
// console.log(loginUserMessage("Dipesh"))                         //Dipesh just logged in
// console.log(loginUserMessage(""))                        //Please enter username.  

const user = {
    username:"Dipesh",
    price:999
}

function handleObject(anyobject){
    // console.log(`Username is ${user.username} and price is ${user.price}`)
}
// handleObject(user)  //Username is Dipesh and price is 999

// or

handleObject({
    userName:"Samresh",
    price:1299
})

const arr = [10, 20, 30, 40]

function returnSecondElement(arr){
    return arr[1]
}

// console.log(returnSecondElement(arr))                //20

// or

// console.log(returnSecondElement([10, 20, 30, 40]))    //20
