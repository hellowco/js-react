import React from 'react';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <input {...register('email')} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" {...register('password')} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
