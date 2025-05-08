// controller.js
import { add } from './model.js';
import { renderList } from './view.js';
import getMessage from './message.js';

document.getElementById('greeting').textContent = getMessage('사용자');
const input = document.getElementById('taskInput');
const btn = document.getElementById('addBtn');

btn.addEventListener('click', () => {
  const task = input.value.trim();
  if (!task) return;
  add(task);
  input.value = '';
  renderList();
});

renderList();
