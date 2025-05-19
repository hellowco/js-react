let fruits = [];

fruits.push('🍎', '🍌', '🍇');
console.log(fruits);

//fruits.map(f => `${f} 좋아요`); 개사기네
let newFruits = fruits.map(function (fruit) {
	return fruit + '좋아요';
});
console.log(newFruits);

//fruits.filter(f => f === "🍌");
let banana = fruits.filter(function (fruit) {
	return fruit === '🍌';
});
console.log(banana);

fruits.pop();
console.log(fruits);
