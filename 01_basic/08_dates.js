// console.log(Date());  //Sun Aug 23 2026 12:17:09 GMT+0530 (India Standard Time)

let myDate = new Date();  // new object create ho gya hai 
// console.log(myDate);        //2026-08-23T06:47:09.992Z

// console.log(myDate.toString()); // Sun Aug 23 2026 12:28:15 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString())  // Sun Aug 23 2026

// console.log(myDate.toLocaleString())  //23/8/2026, 12:26:59 pm

// console.log(myDate.toLocaleDateString())  // 23/8/2026

let myCreatedate = new Date(2023, 0, 23)
// console.log(myCreatedate.toDateString())  //Mon Jan 23 2023

let createDate = new Date("2026-01-23");
// console.log(myCreatedate.toLocaleString());  //23/1/2023, 12:00:00 am

let timeStmp = Date.now();

// console.log(timeStmp);  // value comes in second from 1990 this is 1787468838791

// console.log(createDate.getTime()); //1769126400000

// console.log(Math.floor(Date.now()/1000))  //1787469001

let newDate = new Date();

// console.log(newDate); //2026-08-23T07:10:55.191Z

// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())


newDate.toLocaleString(`default`, {
    weekday:"long"
})

console.log(newDate);