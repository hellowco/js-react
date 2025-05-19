const btn = document.getElementById('addBtn');
const list = document.getElementById('contacts');

btn.addEventListener('click', () => {
	const name = document.getElementById('name');
	const postal = document.getElementById('postal');

	if (!name.value || !postal.value) {
		alert('이름과 우편번호를 모두 입력해주세요.');
		return;
	}

	fetch(`https://api.zippopotam.us/kr/${postal.value}`)
		.then((res) => {
			if (!res.ok) throw new Error('주소 없음');
			return res.json();
		})
		.then((data) => {
			const place = data.places[0]['place name'];
			const state = data.places[0]['state'];

			const address = {
				name: name.value,
				postal: postal.value,
				place,
				state,
			};

			let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
			contacts.push(address);
			localStorage.setItem('contacts', JSON.stringify(contacts));

			renderList();

			name.value = '';
			postal.value = '';
		})
		.catch((err) => {
			alert('유효한 우편번호를 입력하세요.');
		});
});

function renderList() {
	list.innerHTML = '';
	const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
	contacts.forEach((item, index) => {
		const li = document.createElement('li');
		li.innerHTML = `
          ${item.name} (${item.postal}) - ${item.place}, ${item.state}
          <button data-index="${index}">삭제</button>
        `;
		list.appendChild(li);
	});
}

list.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		const index = e.target.dataset.index;
		let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
		contacts.splice(index, 1);
		localStorage.setItem('contacts', JSON.stringify(contacts));
		renderList();
	}
});

// 초기 로딩 시 리스트 표시
// window.addEventListener('DOMContentLoaded', renderList);
