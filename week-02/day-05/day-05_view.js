// view.js
import { getTasks, remove } from './day-05_model.js';

export function renderList() {
	const listEl = document.getElementById('taskList');
	//추가 및 삭제 시 기존 리스트를 비우고 
	listEl.innerHTML = '';
	//다시 만들게 됨
	getTasks().forEach((task, idx) => {
		const li = document.createElement('li');
		li.textContent = task + ' ';
		const btn = document.createElement('button');
		btn.textContent = '삭제';

		btn.addEventListener('click', () => {
			remove(idx);
			renderList();
		});

		li.appendChild(btn);
		listEl.appendChild(li);
	});
}
