// *******Array*************

// const myArr = [0, 1, 2, 3, 4];
const myHero = ["Bheem", "Raju", "Jaggu"]

// console.log(myArr[0])

const myArr2 = new Array(1, 2, 3, 4, 55);

// ************Array Methods **********

// myArr.push(6);
// myArr.push(7);
// console.log(myArr)    // [0, 1, 2, 3, 4, 5, 6, 7]

// myArr.pop();
// console.log(myArr)    // [0, 1, 2, 3, 4, 5, 6]

// myArr.unshift(9);       // first me add karta hai 
// console.log(myArr);    //[9, 0, 1, 2, 3, 4, 5, 6]

// myArr.shift();              // first me delete karta hai 
// console.log(myArr);    //[0, 1, 2, 3, 4, 5, 6]

// myArr.shift();
// console.log(myArr);    //[1, 2, 3, 4, 5, 6]


// console.log(myArr.includes(9));  // false
// console.log(myArr.indexOf(9));   // -1
// console.log(myArr.indexOf(3));   //2


// const newArr = myArr.join()

// console.log(myArr);          //[ 1, 2, 3, 4, 6 ]
// console.log(newArr)         //1,2,3,4,6
// console.log(typeof newArr)  //string


// ***********slice & splice***********


let myArr = [0, 1, 2, 3, 4, 5, 6, 7]   

console.log("A " , myArr)     // A  [0, 1, 2, 3, 4, 5, 6, 7] 

const myn1 = myArr.slice(1, 3)

// console.log(myn1)                //   [ 1, 2 ]
console.log("B ", myArr);          //B  [ 0, 1, 2, 3, 4, 5, 6, 7]

const myn2 = myArr.splice(1, 3);
console.log("C ", myn2);          //C  [ 1, 2, 3 ]