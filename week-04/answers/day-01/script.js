// Week4 Day1 - Linear Search
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

const arr = [3,7,1,9,5];
console.log('Index of 9:', linearSearch(arr, 9)); // 3
console.log('Index of 4:', linearSearch(arr, 4)); // -1
