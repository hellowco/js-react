# Week 11 Challenge

## 테스트 커버리지 챌린지

**목표**  
Jest를 사용해 순수 함수 및 모듈, React 로직에 대한 유닛 테스트와 모킹을 작성하고, 커버리지 100%를 목표로 합니다.

**필수 기능**  
1. **순수 함수 테스트**  
   - `sum.js` (sum), `multiply.js` 함수 유닛 테스트  
2. **비동기 함수 테스트**  
   - `fetchData.js` 의 `fetchData`와 `fetchDataReject` 테스트(`async/await`, `.rejects`)  
3. **모듈 모킹**  
   - `utils.js` 의 `getUser` 모킹하여 반환값 테스트  
4. **React 로직 함수 테스트**  
   - 간단한 로직 분리 함수(예: `add(a,b)`, `capitalize(str)`) 테스트 추가  
5. **커버리지 리포트**  
   - `npm test -- --coverage` 실행 후 100% 달성

**학습 포인트**  
- Jest 설치 및 설정, 유닛 테스트 작성  
- async 테스트 및 모킹, 커버리지 확인
