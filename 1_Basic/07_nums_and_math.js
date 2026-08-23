const score = 400;

const balance = Number(100)

// console.log(score)
// console.log(typeof (score))
// console.log(balance)
// console.log(typeof (balance))

// console.log(balance.toString().length);  // 3
// console.log(balance.toFixed(1));      //100.0
// console.log(balance.toFixed(2));      //100.00

const otherNumber = 123.4567
// console.log(otherNumber.toPrecision(4));   //123.4

const rupess = 1000000;
// console.log(rupess.toLocaleString())  //1,000,000


// console.log(rupess.toLocaleString('en-IN'))  //10,00,000


// *********** Math ***************************

// console.log(Math); // Object [Math] {}

// console.log(Math.abs(-4));    //4
// console.log(Math.round(3.4)); //3
// console.log(Math.round(3.9));  //4
// console.log(Math.ceil(4.2));   //5
// console.log(Math.floor(4.9));  //4

// console.log(Math.min(1, 2, 3, 4,5 ,6, 1))   // 1
// console.log(Math.max(1, 2, 3, 4,5 ,6, 1))   // 6


// console.log(Math.random());  // it give 0-1 value  but in point
// console.log(Math.random()*10);  // it give 0 to 9   but in point
// console.log((Math.random()*10) + 1);  // it give after 1 to 9  but in point

//  console.log(Math.floor(Math.random()*10) + 1);  //value ko single digit me kare deta hai, point ko remove kare deta hai 

 const min = 10
 const max = 20

 console.log(Math.floor(Math.random()*(max - min + 1)) + min) // this is the formula for fixed range