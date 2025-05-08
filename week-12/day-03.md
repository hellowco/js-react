# Week 12 Day 3

## 지문

1. `Greeting.jsx` 컴포넌트 작성:
   ```jsx
   import { useEffect, useState } from 'react';
   export default function Greeting({ initial }) {
     const [msg, setMsg] = useState(initial);
     useEffect(() => {
       setMsg(prev => prev + '!');
     }, [initial]);
     return <div>{msg}</div>;
   }
   ```
2. `Greeting.test.jsx`에서 `rerender`를 사용해 prop을 변경하고, 화면이 업데이트되는지 확인하세요.
