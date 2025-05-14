import { add, remove } from '../day-05_model.js';
import { renderList } from '../day-05_view.js';

const input = document.getElementById('taskInput');

document.getElementById('addBtn').addEventListener('click', () => {
	const addTask = add(input.value);
	renderList(addTask);
	input.value = '';
});

document.getElementById('taskList').addEventListener('click', (e) => {
	if (e.target.classList.contains('deltBtn')) {
		const id = e.target.dataset.id;
		const upTask = remove(id);
		renderList(upTask);
	}
});
