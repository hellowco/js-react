const tree = {
	value: 'root', // 루트 노드
	children: [
		{
			value: 'child1',
			children: [
				{
					value: 'child1-1',
					children: [],
				},
			],
		},
		{
			value: 'child2',
			children: [
				{
					value: 'child2-1',
					children: [],
				},
			],
		},
	],
};

function printTree(node) {
	console.log(node.value);

	node.children.forEach((child) => {
		printTree(child);
	});
}

printTree(tree);
