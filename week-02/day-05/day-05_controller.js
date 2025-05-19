import { add } from './day-05_model.js';
import { renderList } from './day-05_view.js';

const input = document.getElementById('taskInput');
const btn = document.getElementById('addBtn');

//document.getElementById('addBtn').addEventListener('click', () => {
//확장성에 더 좋음
btn.addEventListener('click', () => {
	//validation check(입력값 검사)
	if (input.value) {
		add(input.value);
		input.value = '';

		renderList();
	}
});

renderList();
