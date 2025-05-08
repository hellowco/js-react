// Map & Set 예제
const fruitMap = new Map();
fruitMap.set('apple', 5);
fruitMap.set('banana', 3);

const fruitSet = new Set();
fruitSet.add('🍎');
fruitSet.add('🍌');
fruitSet.add('🍇');
fruitSet.add('🍎'); // 중복 무시

console.log('banana count:', fruitMap.get('banana')); // 3
console.log('Set values:');
for (const f of fruitSet) {
  console.log(f);
}
