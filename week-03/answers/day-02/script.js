// 트리 구조 예제
const tree = {
  value: 'root',
  children: []
};

// 자식 추가
const child1 = { value: 'child1', children: [] };
const child2 = { value: 'child2', children: [] };
tree.children.push(child1, child2);

// 각 자식에 하나씩 자식 노드 추가
child1.children.push({ value: 'child1-1', children: [] });
child2.children.push({ value: 'child2-1', children: [] });

// 트리 순회 재귀 함수
function traverse(node) {
  console.log(node.value);
  node.children.forEach(child => traverse(child));
}

traverse(tree);
