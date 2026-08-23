const repoCount = 50;
const myName = "dipesh"

// console.log(myName, repoCount)

// console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);

// **************** some function *************


let userName = "Dipesh-Kumar"
// console.log(userName);
// console.log(userName[0]);
// console.log(userName.__proto__);

// console.log(myName.toUpperCase());
// console.log(myName.length);

// console.log(myName.indexOf('i'))  // 1
// console.log(myName.charAt(3));    // e


const newString = userName.substring(0, 9);
// console.log(newString);

const anotherString = userName.slice(-2 , 4);
console.log(anotherString + "Hello ");

const StringOne = "  DIpeshOne    ";
console.log(StringOne);
console.log(StringOne.trim());

const url = "https://dipesh.com/dipesh%20kumar"

// console.log(url.replace('%20', '-'));  // https://dipesh.com/dipesh-kumar

// console.log(url.includes('mahto')) // false


const realName = "Samresh mehta and Dipesh kumar";
console.log(realName.split(' '))