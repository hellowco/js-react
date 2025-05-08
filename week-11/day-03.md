# Week 11 Day 3

## 지문

1. 비동기 함수 `fetchData()`를 `fetchData.js`에 작성하세요.
   ```js
   // fetchData.js
   export function fetchData() {
     return new Promise(resolve => {
       setTimeout(() => resolve('peanut butter'), 500);
     });
   }
   ```
2. `fetchData.test.js`에서 `async/await`를 사용해 테스트를 작성하세요:
   ```js
   test('the data is peanut butter', async () => { ... });
   ```
3. 실패 케이스를 위해 `fetchDataReject()` 함수를 작성하고 `.rejects`를 사용해 테스트하세요.
