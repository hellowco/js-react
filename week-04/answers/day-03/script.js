// Week4 Day3 - Selection Sort
function selectionSort(arr) {
  const a = [...arr];
  const n = a.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i+1; j < n; j++) {
      if (a[j] < a[minIdx]) minIdx = j;
    }
    if (minIdx !== i) [a[i], a[minIdx]] = [a[minIdx], a[i]];
    console.log('Step', i, a);
  }
  return a;
}

console.log('Result:', selectionSort([64,25,12,22,11]));
