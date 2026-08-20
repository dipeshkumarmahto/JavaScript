const accountId = 12352;
let accountEmail = "dipeshkumar123mah@gmail.com";
var accountPassword = "12345";
accountCity = "Vadodara";
let accountState;

// accountId = 234;    // not allowed

// console.log(accountId); 
console.log(accountCity); 

accountEmail = "samresh@gmail.com"
accountPassword = "9845";

/*
we not use var..
Because of issue in block scope and function scope
*/

console.table([accountEmail, accountPassword, accountId, accountState]);