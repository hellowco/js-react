# Week 2 Day 3

## 지문

1. ES Module로 파일을 분리해 보세요.  
   - `math.js` 파일에 `export function add(a, b) { return a + b; }` 작성  
   - `main.js` 파일에서 `import { add } from './math.js';` 하고 `console.log(add(2,3));` 실행  
2. HTML에서 `<script type="module" src="main.js"></script>`로 모듈을 로드하세요.  
3. 다른 모듈인 `message.js`를 만들어 `export default`로 인사 메시지를 반환하고, `main.js`에서 받아 출력하세요.
