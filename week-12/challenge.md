# Week 12 Challenge

## 통합 테스트 스위트

**목표**  
React Testing Library와 MSW를 사용해 컴포넌트 통합 테스트를 작성하고, E2E 수준의 시나리오를 구현하세요.

**필수 기능**  
1. **컴포넌트 테스트**  
   - `Hello`, `Counter`, `Greeting` 컴포넌트 개별 테스트  
2. **MSW 설정**  
   - `/api/user/:id` 모킹하여 `UserProfile` 테스트  
3. **통합 테스트**  
   - `App.jsx` 렌더링 후 Hello 확인, Counter 클릭, Greeting 업데이트, UserProfile fetch 순차 테스트

**학습 포인트**  
- React Testing Library 사용법, `fireEvent`, `waitFor`  
- MSW 설정 및 핸들링
