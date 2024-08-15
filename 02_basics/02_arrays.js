const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["batman", "superman", "flash"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]);

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_new_heroes);



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Prajjwal"));
console.log(Array.from("Prajjwal"));
console.log(Array.from({name:"Prajjwal"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
