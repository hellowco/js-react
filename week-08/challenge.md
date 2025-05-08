# Week 8 Challenge

## 통합 장바구니 대시보드 만들기

**목표**  
Context API와 Redux Toolkit을 활용해 **사용자 정보/테마** Context와 **상품 목록/장바구니** 상태 관리를 결합한 대시보드 앱을 구현하세요.

**필수 기능**  
1. **멀티 Context**  
   - ThemeContext: light/dark 테마 관리  
   - UserContext: 사용자 이름 관리  
   - `useMemo`/`useCallback` 최적화 적용  

2. **Redux Toolkit 설정**  
   - `configureStore`로 Redux store 구성  
   - Cart slice: `items`, `products`, `loading` 상태  
   - Thunk: `fetchProducts`로 외부 API 호출 (`https://fakestoreapi.com/products`)  

3. **UI 구성**  
   - 상단: 사용자 인사(`Hello, {user.name}`) + 테마 토글 버튼  
   - 중단: 제품 목록 렌더링, “장바구니에 담기” 버튼  
   - 하단: 장바구니에 담긴 아이템 리스트  

4. **이벤트 & 비동기 처리**  
   - 앱 시작 시 `fetchProducts` 디스패치  
   - 버튼 클릭 시 `addItem`, `removeItem` 디스패치  

**학습 포인트**  
- Context API 고급 사용, Redux Toolkit `createSlice`/`createAsyncThunk`  
- React-Redux: `useSelector`, `useDispatch`  
- 상태 최적화 및 조합  
