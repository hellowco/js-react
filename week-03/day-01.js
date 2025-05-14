let fMap = new Map();
let fSet = new Set();

fMap.set('apple', 5);
fMap.set('banana', 3);
fSet.add('🍎');
fSet.add('🍌');
fSet.add('🍇');
fSet.add('🍎'); //중복이라 무시됨

console.log(fMap.get('banana'));

for (const fruit of fSet) {
	console.log(fruit);
}
