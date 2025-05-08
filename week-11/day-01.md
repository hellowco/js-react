# Week 11 Day 1

## 지문

1. 프로젝트에 Jest를 설치하세요:
   ```bash
   npm install --save-dev jest
   ```
2. `package.json`에 테스트 스크립트를 추가하세요:
   ```json
   "scripts": {
     "test": "jest"
   }
   ```
3. `sum.js` 파일을 만들고, `function sum(a, b) { return a + b; } export default sum;`을 작성하세요.
4. `sum.test.js` 파일에서 `test`와 `expect`를 사용해 `sum(2,3)`이 `5`를 반환하는 기본 테스트를 작성하세요.
