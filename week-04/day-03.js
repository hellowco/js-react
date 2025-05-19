function selectionSort(arr) {
	const a = [...arr];

	for (let i = 0; i < a.length - 1; i++) {
    // 가장 작은 값이라 가정
		let minIdx = i;

		for (let j = i + 1; j < a.length; j++) {
      // j값이 더 작은 경우 업데이트
			if (a[j] < a[minIdx]) minIdx = j;
		}
    // 가장 작은 값이 현재 위치와 다르면 자리 교환
		if (minIdx !== i) [a[i], a[minIdx]] = [a[minIdx], a[i]];
	}
	return a;
}

console.log(selectionSort([64, 25, 12, 22, 11]));
