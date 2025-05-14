let tasks = [];

export function add(task) {
	tasks.push(task);
}

export function remove(index) {
	tasks.splice(index, 1);
}

export function getTasks() {
	return tasks;
}

export function message() {
	const msgs = ['오늘도 힘내세요', '할 일은 다 하셨나요?', '잘하고 있어요~'];
	return msgs;
}
