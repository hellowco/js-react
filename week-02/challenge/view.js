import { getTasks, remove } from './model.js';

export function renderList() {
	const taskList = document.getElementById('taskList');
	const msgBox = document.getElementById('msgBox');

	//랜덤 메세지
	// const msgs = message();
	// const randomIdx = Math.floor(Math.random() * msgs.length);
	// const randomMsg = msgs[randomIdx];
	// msgBox.textContent = '오늘의 한마디 : ' + randomMsg;

	taskList.innerHTML = '';
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
		taskList.appendChild(li);
	});
}
