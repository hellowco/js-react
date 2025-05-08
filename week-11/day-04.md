# Week 11 Day 4

## 지문

1. 모듈 `utils.js`를 만들어 `function getUser() { return { name: 'Bob' }; }`를 `export` 하세요.
2. `user.test.js`에서 `jest.mock('./utils')`로 mocking을 적용하고,  
   `getUser()`가 `{ name: 'Alice' }`를 반환하도록 오버라이드하여 테스트하세요.
