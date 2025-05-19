const info = {
	name: 'Alice',
	age: 25,
	city: 'Seoul',
};

// 객체 -> 문자열
const strInfo = JSON.stringify(info);
console.log(jsonInfo);

// 문자열 -> 객체
const objInfo = JSON.parse(strInfo);
console.log(objInfo);

// localStorage에 저장
localStorage.setItem('user', strInfo);

// 새로고침 후 실행
let savedData = localStorage.getItem('user'); // 문자열
let userInfo = JSON.parse(savedData); // 다시 객체로 변환 -> 복구
console.log(userInfo);
