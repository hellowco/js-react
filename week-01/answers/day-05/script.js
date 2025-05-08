let fruits = [];
fruits.push("🍎", "🍌", "🍇");
console.log(fruits);

let likes = fruits.map(f => `${f} 좋아요`);
console.log(likes);

let onlyBanana = fruits.filter(f => f === "🍌");
console.log(onlyBanana);

fruits.pop();
console.log(fruits);