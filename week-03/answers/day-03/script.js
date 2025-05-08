// JSON stringify/parse & localStorage
const user = { name: 'Alice', age: 25, city: 'Seoul' };
const str = JSON.stringify(user);
console.log('string:', str);

const obj = JSON.parse(str);
console.log('parsed:', obj);

localStorage.setItem('user', str);
// 새로고침 후 실행
const saved = localStorage.getItem('user');
console.log('from storage:', JSON.parse(saved));
