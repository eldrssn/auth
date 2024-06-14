import React, { useState } from 'react';
import { register } from '../../api/auth';
import { validateYear } from '../../utils/validate-year';

const Register: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    birthYear: '',
    email: '',
    password: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateYear(form.birthYear);
    
    if (validationError) {
      alert(validationError);
      return;
    }

    try {
      await register(form);
      alert('Пользователь зарегистрирован');
      window.location.href = '/login';
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="wrapper">
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Имя"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Фамилия"
          value={form.lastName}
          onChange={handleChange}
          required
        />
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Выберите пол
          </option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
        <input
          type="number"
          name="birthYear"
          placeholder="Год рождения"
          value={form.birthYear}
          onChange={handleChange}
          required
        />
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
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;
