const arr = [1, 2, 3];
const obj = { name: 'Alice', age: 30 };

// 1. Destructuring
// 배열
let [first, ...restArr] = arr;
console.log(restArr);
// 객체
let { name, age } = obj;
console.log(name);
console.log(age);

// 2. Spread
const newArr = [...arr];

arr.push(4);
console.log(arr);
console.log(newArr);
