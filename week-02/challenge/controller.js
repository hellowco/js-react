import { add } from './model.js';
import { renderList } from './view.js';
import getMessage from './message.js';

document.getElementById('msgBox').textContent = getMessage('사용자');
const input = document.getElementById('taskInput');
const btn = document.getElementById('addBtn');

btn.addEventListener('click', () => {
	if (input.value) {
		add(input.value);
		input.value = '';
		renderList();
	}
});

renderList();
