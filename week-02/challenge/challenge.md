# Week 2 Challenge

## 모듈 기반 할 일 + 인사 메시지 앱 만들기

**목표**  
ES6 모듈을 활용해 할 일(To-Do) 관리와 인사 메시지 모듈을 결합한 앱을 구현하세요.

**필수 기능**  
1. **model.js**  
   - 할 일 목록을 관리하는 함수 `add(task)`, `remove(index)`, `getTasks()`를 구현  
2. **view.js**  
   - `renderList()` 함수로 할 일 목록을 `<ul>`에 렌더링  
3. **controller.js**  
   - 입력 필드와 "추가" 버튼 이벤트를 바인딩  
   - 할 일 추가/삭제 요청 시 model & view 연동  
4. **message.js**  
   - `export default function getMessage(name)` 으로 인사 메시지 반환  
5. **index.html**  
   - 모듈 `<script type="module">`로 로딩  
   - 상단에 `getMessage('사용자')`로 받은 메시지 표시  

**학습 포인트**  
- ES6 `import`/`export`  
- 모듈 간 책임 분리  
- DOM 조작 및 이벤트 핸들링  
