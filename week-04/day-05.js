// Week4 Day5 - Bubble Sort Visualization
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const arr = [5, 3, 8, 4, 2];
const width = canvas.width;
const height = canvas.height;
const barWidth = width / arr.length;

function drawArray(a) {
	ctx.clearRect(0, 0, width, height);
	a.forEach((v, i) => {
		ctx.fillRect(i * barWidth, height - v * 20, barWidth - 2, v * 20);
	});
}

function sleep(ms) {
	return new Promise((res) => setTimeout(res, ms));
}

async function visualize() {
	let a = [...arr];
	const n = a.length;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			if (a[j] > a[j + 1]) {
				[a[j], a[j + 1]] = [a[j + 1], a[j]];
				drawArray(a);
				await sleep(500);
			}
		}
	}
}

drawArray(arr);
visualize();
