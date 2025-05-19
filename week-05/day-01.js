// path : 읽고 싶은 파일 경로 callback :  결과를 처리할 콜백 함수
function readFileCallback(path, callback) {
	setTimeout(function () {
		if (path !== '존재하는 파일') {
			// 에러가 발생한 상황에서는 항상 첫 번째 인자에 에러 객체를 넘긴다는 게 콜백 패턴의 룰
			callback(new Error('파일을 찾을 수 없음'), null);
		} else {
			// 성공 시에는 결과를 두 번째 인자로 줌
			callback(null, path);
		}
	}, 500);
}

readFileCallback('존재하는 파일', (err, data) => {
	if (err) console.error('Error : ', err.message);
	else console.log('Data : ', data);
});

readFileCallback('존재하지 않는 파일', (err, data) => {
	if (err) console.error('Error : ', err.message);
	else console.log('Data : ', data);
});
