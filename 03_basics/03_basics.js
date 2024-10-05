//map, filter, arrow fns


///arrow fns

// function sum(a, b){
//     return a + b;
// }

const sum = (a, b) => {
    return a + b;
}
// Both functions will work the same for the purpose of summing two numbers, but their behavior regarding this and hoisting differs, which can impact how they are used in certain scenarios.

const ans = sum(1, 2);
console.log(ans)


///map

// given an array, give me back a new array in which every value is mutiplied by 2
// [1, 2, 3, 4, 5]
// [2, 4, 6, 8, 10]

const input = [1, 2, 3, 4, 5]

/// Solution
// newArray = []
// for(let i = 0; i<input.length; i++) {
//     newArray.push(input[i] * 2)
// }

// console.log(newArray);

// another solution

const ans1 = input.map((i) => {
    return i * 2;
})
console.log(ans1);


///filter

// create a new array that only has even values from the given array
const arr = [1, 2, 3, 4, 5]

/// ans

// const newArray = []
// for(let i = 0; i<arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         newArray.push(arr[i])
//     }
// }

const ans2 = arr.filter((n) => {
    if(n % 2 == 0) return true;
    else return false;
})
console.log(ans2);
