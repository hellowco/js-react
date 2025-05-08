// src/SignupForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

export default function SignupForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log('Signup data:', data);

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
      <button type="submit">Sign Up</button>
    </form>
  );
}
