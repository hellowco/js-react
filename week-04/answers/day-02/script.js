// Week4 Day2 - Bubble Sort
function bubbleSort(arr) {
  const a = [...arr];
  const n = a.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      console.log('Compare', a[j], a[j+1]);
      if (a[j] > a[j+1]) {
        [a[j], a[j+1]] = [a[j+1], a[j]];
        console.log('Swap:', a);
      }
    }
  }
  return a;
}

console.log('Sorted:', bubbleSort([5,3,8,4,2]));
