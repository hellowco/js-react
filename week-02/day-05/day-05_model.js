let tasks = [];
let idCounter = 0;

export function add(taskText) {
	const newTask = {
		id: idCounter++,
		text: taskText,
	};
	tasks.push(newTask);
	return [...tasks];
}

export function remove(taskId) {
	tasks = tasks.filter((task) => task.id !== Number(taskId));
	return [...tasks];
}
