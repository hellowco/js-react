# Week 12 Day 2

## 지문

1. `Counter.jsx` 컴포넌트를 작성하세요:
   ```jsx
   import { useState } from 'react';
   export default function Counter() {
     const [count, setCount] = useState(0);
     return (
       <>
         <span data-testid="count">{count}</span>
         <button onClick={() => setCount(c => c + 1)}>+</button>
       </>
     );
   }
   ```
2. `Counter.test.jsx`에서 `fireEvent.click`을 사용해 버튼 클릭 시 카운트가 증가하는지 테스트하세요.
