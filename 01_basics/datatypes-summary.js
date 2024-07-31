// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 34564355326753254763254n



// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Prajjwal",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);



// ************************************

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Prajjwal"

let anotherName = myName
anotherName = "Choubey"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "prajjwal@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);