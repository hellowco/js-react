// model.js
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
