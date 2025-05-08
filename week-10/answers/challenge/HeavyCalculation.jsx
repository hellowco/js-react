// src/components/HeavyCalculation.jsx
import React, { useMemo } from 'react';

function heavyCalc(num) {
  console.log('Calculating...');
  let result = 1;
  for (let i = 1; i <= num * 1000000; i++) result += i;
  return result;
}

export default function HeavyCalculation({ num }) {
  const value = useMemo(() => heavyCalc(num), [num]);
  return <div>Computed Value: {value}</div>;
}
