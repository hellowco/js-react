# Week 7 Challenge

## 이미지 갤러리 + 테마 토글 앱 만들기

**목표**  
React Hooks(`useEffect`, `useRef`, Custom Hook, Context)을 활용해 **무한 스크롤 이미지 갤러리**와 **테마 토글** 기능을 구현하세요.

**필수 기능**  
1. **Custom Hook - useWindowSize**  
   - `window.innerWidth`, `innerHeight` 상태 관리  
   - `resize` 이벤트로 값 업데이트  

2. **무한 스크롤 이미지 갤러리**  
   - `useEffect`로 외부 이미지 API 호출 (예: Unsplash API)  
   - `useRef`로 마지막 아이템 관찰, 스크롤 시 추가 이미지 로드  

3. **테마 토글**  
   - `ThemeContext` 생성, `Provider`로 테마(light/dark) 관리  
   - 버튼 클릭 시 테마 변경, 배경/글자 색 반영  

4. **컴포넌트 통합**  
   - `App.jsx`에서 `Gallery`와 `ThemeToggle` 컴포넌트 렌더링  
   - Custom Hook과 Context 연동  

**학습 포인트**  
- `useEffect`, `useRef`, Custom Hook 구현, Context API 사용 및 조합
