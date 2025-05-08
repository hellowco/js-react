// src/components/Gallery.jsx
import React, { useState, useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import useWindowSize from '../hooks/useWindowSize';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const loader = useRef(null);
  const page = useRef(1);
  const { theme } = useContext(ThemeContext);
  const { width } = useWindowSize();

  const loadImages = async () => {
    const res = await fetch(`https://api.example.com/images?page=${page.current}`);
    const data = await res.json();
    setImages(prev => [...prev, ...data]);
    page.current += 1;
  };

  useEffect(() => {
    loadImages();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) loadImages();
    });
    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <p>Window width: {width}px</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        {images.map((img, idx) => (
          <img key={idx} src={img.url} alt="" style={{ width: '100%' }} />
        ))}
      </div>
      <div ref={loader} style={{ height: 20 }} />
    </div>
  );
}
