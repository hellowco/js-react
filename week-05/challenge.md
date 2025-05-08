# Week 5 Challenge

## 영화·날씨 대시보드 만들기

**목표**  
OpenWeatherMap API와 The Movie Database API를 병렬 호출해 “영화·날씨 대시보드”를 구현하세요.

**필수 기능**  
1. **UI 구성**  
   - 상단에 탭 또는 버튼으로 “날씨”, “영화” 전환  
   - 각 섹션에 데이터를 표시할 영역(div 또는 ul)  

2. **API 병렬 호출**  
   - `Promise.all` 또는 `async/await`로 두 API 동시 요청  
   - 날씨: `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=YOUR_API_KEY`  
   - 영화: `https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY`  

3. **데이터 렌더링**  
   - 날씨: 온도(℃)와 날씨 설명 출력  
   - 영화: 상위 5개 영화 제목 리스트 표시  

4. **에러 처리**  
   - 네트워크 실패 시 `alert('데이터 로딩 실패')`  

**학습 포인트**  
- 비동기 병렬 호출(`Promise.all`, `async/await`)  
- DOM 업데이트 및 이벤트 핸들링  
- 에러 핸들링(.catch)  
