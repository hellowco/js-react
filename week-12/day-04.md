# Week 12 Day 4

## 지문

1. `UserProfile.jsx` 컴포넌트 작성:
   ```jsx
   import { useEffect, useState } from 'react';
   export default function UserProfile({ userId }) {
     const [user, setUser] = useState(null);
     useEffect(() => {
       fetch(`/api/user/${userId}`)
         .then(res => res.json())
         .then(data => setUser(data));
     }, [userId]);
     if (!user) return <div>Loading...</div>;
     return <div>{user.name}</div>;
   }
   ```
2. msw(Mock Service Worker)를 설치 및 설정하고, `/api/user/1` 요청을 모킹해 `{ name: 'Alice' }`를 반환하도록 설정하세요.
3. `UserProfile.test.jsx`에서 `waitFor`를 사용해 `Alice`가 화면에 나타나는지 테스트하세요.
