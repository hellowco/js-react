// 우편번호 트리 탐색기 해답
const root = { value: '한국', children: [] };
const treeContainer = document.getElementById('tree');
const searchBtn = document.getElementById('searchBtn');
const postalInput = document.getElementById('postal');

const entries = new Map();

function traverseRender(node, parentEl) {
  const li = document.createElement('li');
  li.textContent = node.value;
  parentEl.appendChild(li);
  if (node.children.length) {
    const ul = document.createElement('ul');
    li.appendChild(ul);
    node.children.forEach(child => traverseRender(child, ul));
  }
}

function renderTree() {
  treeContainer.innerHTML = '';
  const ul = document.createElement('ul');
  treeContainer.appendChild(ul);
  traverseRender(root, ul);
}

function addToTree(place, state) {
  if (!entries.has(place)) {
    entries.set(place, { postal: null, place, state });
    const cityNode = root.children.find(c => c.value === state) || (() => {
      const newNode = { value: state, children: [] };
      root.children.push(newNode);
      return newNode;
    })();
    cityNode.children.push({ value: place, children: [] });
    localStorage.setItem('addresses', JSON.stringify(Array.from(entries.values())));
    renderTree();
  }
}

searchBtn.addEventListener('click', async () => {
  const code = postalInput.value.trim();
  if (!code) return;
  try {
    const res = await fetch(`https://api.zippopotam.us/kr/${code}`);
    const data = await res.json();
    const place = data.places[0]['place name'];
    const state = data.places[0].state;
    addToTree(place, state);
  } catch (e) {
    console.error(e);
    alert('검색 오류');
  }
});

// 초기 로드
const saved = JSON.parse(localStorage.getItem('addresses') || '[]');
saved.forEach(item => addToTree(item.place, item.state));
