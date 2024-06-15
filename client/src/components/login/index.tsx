import React, { useState } from 'react';
import { login } from '../../api/auth';

const Login: React.FC = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(form.email, form.password); 
      localStorage.setItem('token', data.token);
      window.location.href = `/profile/${data.id}`;
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="wrapper">
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
