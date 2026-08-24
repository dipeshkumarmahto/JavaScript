const marvel_hero = ["thor", "Ironman", "spiderman"]
const dc_hero = ["spuerman", "flash", "batman"]

// marvel_hero.push(dc_hero)
// console.log(marvel_hero)
// console.log(marvel_hero[3][1])

// const newhero = marvel_hero.concat(dc_hero);
// console.log( newhero)        // [ 'thor', 'Ironman', 'spiderman', 'spuerman', 'flash', 'batman' ]// 

// ******** spread operator ***********

const allhero = [...marvel_hero, ...dc_hero]
// console.log(allhero)       //[ 'thor', 'Ironman', 'spiderman', 'spuerman', 'flash', 'batman' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)   // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// console.log(Array.isArray("Dipesh"))   // false
// console.log(Array.from("Dipesh"))    // [ 'D', 'i', 'p', 'e', 's', 'h' ]
// console.log(Array.from({name:"Dipesh"}))  // []

let a = 10
let b = 20
let c = 30

// console.log(Array.of(a, b, c))   //[ 10, 20, 30 ]