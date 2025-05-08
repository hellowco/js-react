// controller.js
import { add } from './model.js';
import { renderList } from './view.js';

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
