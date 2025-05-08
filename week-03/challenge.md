# Week 3 Challenge

## 우편번호 트리 탐색기 만들기

**목표**  
Map/Set, 트리 구조, JSON, localStorage, fetch API를 활용해 “우편번호 트리 탐색기”를 구현하세요.

**필수 기능**  
1. **트리 구조 생성**  
   - 시/군 → 동 계층으로 구성된 트리 객체를 직접 생성  
   - 예시 노드: `{ value: "서울특별시", children: [{ value: "강남구", children: [] }, ...] }`  

2. **API 연동**  
   - 입력 필드에 우편번호 입력 후 검색 버튼 클릭  
   - `https://api.zippopotam.us/kr/{postalcode}` 에서 지역 정보(fetch)  
   - 반환된 `places[0]["place name"]`, `state`를 트리에 추가  

3. **주소록 관리**  
   - Map 또는 Set을 사용해 중복 없이 지역 정보를 저장  
   - localStorage에 `{ postal, place, state }` 리스트로 저장/로드  

4. **트리 렌더링**  
   - 재귀 함수를 이용해 트리 구조를 `<ul><li>` 형태로 화면에 표시  
   - 새로 추가된 노드가 자동으로 트리에 반영되어 보이도록 업데이트  

**학습 포인트**  
- Map/Set 사용법, 재귀 함수 작성, JSON 직렬화/역직렬화, fetch 비동기 처리, localStorage
