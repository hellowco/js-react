# Week 10 Challenge

## 퍼포먼스 튠업 프로젝트

**목표**  
이전에 만든 SPA에 **렌더 최적화**와 **코드 스플리팅**, **이미지 lazy-loading**를 적용하고 **번들 분석** 및 **Lighthouse 성능 측정**을 통해 개선점을 찾아보세요.

**필수 기능**  
1. **useMemo/useCallback 적용**  
   - 무거운 계산 또는 콜백 함수를 `useMemo`/`useCallback`으로 최적화  

2. **React.lazy & Suspense**  
   - 일부 라우트 또는 컴포넌트를 동적 import  
   - 로딩 시 `Suspense` fallback 표시  

3. **이미지 lazy-loading**  
   - `<img loading="lazy">` 속성 활용  

4. **번들 분석**  
   - `webpack-bundle-analyzer` 설정 및 실행  
   - 분석 결과를 기반으로 주요 번들 크기 지표 기록  

5. **Lighthouse 측정**  
   - LCP, FID, CLS 지표 측정  
   - 개선 전/후 성능 결과를 요약  

**학습 포인트**  
- React 퍼포먼스 최적화 기법  
- 코드 스플리팅과 Suspense  
- 웹 성능 측정 도구 활용
