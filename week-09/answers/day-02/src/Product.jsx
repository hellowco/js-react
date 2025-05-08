import React from 'react';
import { useParams } from 'react-router-dom';

export default function Product() {
  const { id } = useParams();
  return <h2>Product ID: {id}</h2>;
}
