// week-04 answers/challenge/script.js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const select = document.getElementById('algorithm');
const runBtn = document.getElementById('runBtn');
const delay = ms => new Promise(res => setTimeout(res, ms));

function drawArray(arr, highlight = []) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const w = canvas.width / arr.length;
  arr.forEach((v, i) => {
    ctx.fillStyle = highlight.includes(i) ? 'red' : 'black';
    ctx.fillRect(i * w, canvas.height - v * 10, w - 2, v * 10);
  });
}

async function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    drawArray(arr, [i]);
    await delay(300);
    if (arr[i] === target) {
      console.log('Found at index', i);
      return;
    }
  }
  console.log('Not found');
}

async function bubbleSort(arr) {
  const a = [...arr];
  const n = a.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      drawArray(a, [j, j+1]);
      await delay(300);
      if (a[j] > a[j+1]) {
        [a[j], a[j+1]] = [a[j+1], a[j]];
        drawArray(a, [j, j+1]);
        await delay(300);
      }
    }
  }
  console.log('Sorted:', a);
}

async function selectionSort(arr) {
  const a = [...arr];
  const n = a.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i+1; j < n; j++) {
      drawArray(a, [min, j]);
      await delay(300);
      if (a[j] < a[min]) min = j;
    }
    if (min !== i) {
      [a[i], a[min]] = [a[min], a[i]];
      drawArray(a, [i, min]);
      await delay(300);
    }
  }
  console.log('Sorted:', a);
}

async function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length/2);
  const left = await mergeSort(arr.slice(0, mid));
  const right = await mergeSort(arr.slice(mid));
  const merged = [];
  while (left.length && right.length) {
    drawArray([...left, ...right], []);
    await delay(300);
    if (left[0] < right[0]) merged.push(left.shift());
    else merged.push(right.shift());
  }
  return merged.concat(left, right);
}

runBtn.addEventListener('click', async () => {
  const algorithm = select.value;
  const arr = Array.from({length: 20}, () => Math.floor(Math.random() * 20) + 1);
  drawArray(arr);
  if (algorithm === 'linear') {
    const target = arr[Math.floor(Math.random() * arr.length)];
    await linearSearch(arr, target);
  } else if (algorithm === 'bubble') {
    await bubbleSort(arr);
  } else if (algorithm === 'selection') {
    await selectionSort(arr);
  } else if (algorithm === 'merge') {
    const sorted = await mergeSort(arr);
    drawArray(sorted);
    console.log('Merge Sorted:', sorted);
  }
});
