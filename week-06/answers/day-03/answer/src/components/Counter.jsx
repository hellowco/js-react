import React from 'react';

export default function Counter({ initialValue }) {
  console.log('Counter props:', initialValue);
  return (
    <div>
      <p>초기값: {initialValue}</p>
    </div>
  );
}
