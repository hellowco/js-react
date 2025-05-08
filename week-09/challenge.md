# Week 9 Challenge

## 회원 관리 SPA 만들기

**목표**  
React Router v6, React Hook Form, 인증 로직을 활용해 **회원 관리 SPA**를 구현하세요.

**필수 기능**  
1. **라우팅**  
   - `/signup`: 회원가입 페이지  
   - `/login`: 로그인 페이지  
   - `/profile/:userId`: 동적 라우팅 프로필 페이지  
   - `/dashboard`: PrivateRoute로 보호된 대시보드

2. **회원가입 폼(SignupForm)**  
   - `react-hook-form` 사용  
   - `email`, `password` 필드 등록 및 기본 검증  
   - 제출 시 `console.log`로 입력 데이터 확인

3. **로그인 폼(LoginForm)**  
   - `react-hook-form` 및 검증  
   - 로그인 성공 시 `dummy-token`을 `localStorage`에 저장  
   - `/dashboard`로 리다이렉트

4. **PrivateRoute 컴포넌트**  
   - 토큰이 없으면 `/login`으로 리다이렉트, 있으면 자식 컴포넌트 렌더

5. **프로필 페이지**  
   - `useParams`로 URL `userId` 읽어 `<h2>User Profile: {userId}</h2>` 렌더

**학습 포인트**  
- React Router v6 기본 및 동적 라우팅  
- React Hook Form 활용 및 검증  
- 인증 플로우 및 PrivateRoute 구현
