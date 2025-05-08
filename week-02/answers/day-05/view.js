// view.js
import { getTasks, remove } from './model.js';

export function renderList() {
  const listEl = document.getElementById('taskList');
  listEl.innerHTML = '';
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
