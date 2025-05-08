import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = data => {
    console.log('Login data', data);
    localStorage.setItem('token', 'dummy-token');
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input {...register('email', { required: true })} />
        {errors.email && <p>Email required</p>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" {...register('password', { required: true, minLength: 6 })} />
        {errors.password && <p>Password min length 6</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
