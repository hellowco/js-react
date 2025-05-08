// src/components/LazyComponent.jsx
import React, { Suspense, lazy } from 'react';
const Dynamic = lazy(() => import('./DynamicComponent'));

export default function LazyWrapper() {
  return (
    <Suspense fallback={<div>Loading Component...</div>}>
      <Dynamic />
    </Suspense>
  );
}
