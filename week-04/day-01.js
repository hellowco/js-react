let arry = [3, 7, 1, 9, 5];

function linearSearch(arry, target) {
	for (let i = 0; i < arry.length; i++) {
		if (arry[i] === target) {
			return i;
		}
	}
	return -1;
}

// 성공 케이스
console.log(linearSearch(arry, 9)); // 출력: 3
// 실패 케이스
console.log(linearSearch(arry, 2)); // 출력: -1
