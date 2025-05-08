// Day 1 - Destructuring & Spread
const arr = [1, 2, 3];
const obj = { name: "Alice", age: 30 };

// Destructuring
const [first, ...restArr] = arr;
const { name, age } = obj;
console.log(first, restArr); // 1 [2,3]
console.log(name, age);     // Alice 30

// Spread
const newArr = [...arr];
arr.push(4);
console.log(arr);    // [1,2,3,4]
console.log(newArr); // [1,2,3]
