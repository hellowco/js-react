import React, { Suspense, lazy } from 'react';
const HeavyComponent = lazy(() => import('./HeavyComponent'));

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}