function bubbleSort(arr) {
	const sortList = [...arr];

	for (let i = 0; i < sortList.length - 1; i++) {
		for (let j = 0; j < sortList.length - 1 - i; j++) {
			console.log('1 : ' + sortList[j]);
			console.log('------');

			if (sortList[j] > sortList[j + 1]) {
				// 자리 바꾸기
				//[a[j], a[j+1]] = [a[j+1], a[j]]; -> 비구조화 할당
				let temp = sortList[j]; //j번째 값을 temp에 저장
				sortList[j] = sortList[j + 1]; //j+1번째 값을 j번째 자리에 복사 (교체)
				sortList[j + 1] = temp; //원래 j번째 값을 j+1자리에 저장 (temp에서 복구)

				console.log('2 : ' + sortList[j]);
			}
		}
	}

	return sortList;
}

console.log(bubbleSort([5, 3, 8, 4, 2]));
