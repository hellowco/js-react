export function renderList(taskArr) {
	const list = document.getElementById('taskList');
	list.innerHTML = '';

	taskArr.forEach((task) => {
		const li = document.createElement('li');
		li.textContent = task.text;

		const btn = document.createElement('button');
		btn.textContent = '삭제';
		btn.classList.add('deltBtn');
		btn.dataset.id = task.id;

		li.appendChild(btn);
		list.appendChild(li);
	});
}
