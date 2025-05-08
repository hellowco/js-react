# Week 12 Day 1

## 지문

1. React Testing Library를 설치하세요:
   ```bash
   npm install --save-dev @testing-library/react @testing-library/jest-dom
   ```
2. 간단한 `Hello.jsx` 컴포넌트를 작성하세요:
   ```jsx
   export default function Hello({ name }) {
     return <h1>Hello, {name}!</h1>;
   }
   ```
3. `Hello.test.jsx` 파일에서 `render`와 `screen.getByText`를 사용해 `Hello name="World"`가 렌더링되는지 확인하세요.
