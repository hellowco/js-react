// src/Profile.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Profile() {
  const { userId } = useParams();
  return <h2>User Profile: {userId}</h2>;
}
