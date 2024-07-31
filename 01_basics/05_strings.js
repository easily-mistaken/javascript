const name = "Prajjwal"
const repoCount = 10

// console.log(name +repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('prajjwal-pj-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "       prajjwal     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://prajjwal.com/prajjwal%20choubey"

console.log(url.replace('%20', '-'))

console.log(url.includes('prajjwal'));
console.log(url.includes('jethalal'));

console.log(gameName.split('-'));