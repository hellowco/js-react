# Week 6 Challenge

## React 시작 대시보드 만들기

**목표**  
Vite로 React 프로젝트를 세팅하고, **Header**, **Counter**, **Footer** 컴포넌트를 조합해 간단한 대시보드 앱을 구현하세요.

**필수 기능**  
1. **프로젝트 세팅**  
   - `npm create vite@latest dashboard -- --template react` 등으로 React 환경 구성  
   - `npm install`, `npm run dev`로 실행 확인  

2. **Header 컴포넌트**  
   - Props로 `title`을 받아 `<h1>`으로 표시  
   - 예: `<Header title="Welcome!" />`  

3. **Counter 컴포넌트**  
   - `useState`를 이용해 `count` 상태 관리  
   - '+' 버튼 클릭으로 증가, '-' 버튼 클릭으로 감소  
   - `count` 값이 화면에 표시  

4. **Footer 컴포넌트**  
   - Props로 `author`를 받아 `<footer>`에 표시  

5. **조합**  
   - `App.jsx`에서 Header, Counter, Footer 순서로 렌더링  
   - CSS로 레이아웃을 간단히 정리  

**학습 포인트**  
- Vite + React 환경  
- 함수형 컴포넌트, Props 전달, useState  
- 컴포넌트 구조 분리 및 조합  
