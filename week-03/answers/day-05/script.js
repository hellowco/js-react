// 주소록 앱
const nameInput = document.getElementById('name');
const postalInput = document.getElementById('postal');
const btn = document.getElementById('addBtn');
const list = document.getElementById('contacts');

function loadContacts() {
  const data = JSON.parse(localStorage.getItem('contacts') || '[]');
  list.innerHTML = '';
  data.forEach((item, idx) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.place}, ${item.state}`;
    const del = document.createElement('button');
    del.textContent = '삭제';
    del.addEventListener('click', () => {
      data.splice(idx,1);
      localStorage.setItem('contacts', JSON.stringify(data));
      loadContacts();
    });
    li.appendChild(del);
    list.appendChild(li);
  });
}

btn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const postal = postalInput.value.trim();
  if (!name || !postal) return;
  fetch(`https://api.zippopotam.us/kr/${postal}`)
    .then(res => res.json())
    .then(data => {
      const place = data.places[0]['place name'];
      const state = data.places[0].state;
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      contacts.push({ name, postal, place, state });
      localStorage.setItem('contacts', JSON.stringify(contacts));
      loadContacts();
      nameInput.value = postalInput.value = '';
    })
    .catch(err => console.error(err));
});

loadContacts();
