let score = "33"

// const {score = req.body} // here we don't know typeof score

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "prajjwal" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log( typeof stringNumber);
