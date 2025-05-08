<!-- src/components/LazyImage.jsx -->
import React from 'react';

export default function LazyImage({ src, alt }) {
  return <img src={src} alt={alt} loading="lazy" />;
}
