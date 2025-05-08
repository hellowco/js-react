// src/LoginForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = data => {
    console.log('Login:', data);
    localStorage.setItem('token', 'dummy-token');
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input {...register('email', { required: true })} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" {...register('password', { required: true, minLength: 6 })} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
