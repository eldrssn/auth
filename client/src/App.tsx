import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Profile from './components/profile';
import { getToken } from './utils/get-token';

const App: React.FC = () => {
  const token = getToken();

  return (
    <Router>
      <Routes>
        <Route path="/" element={token ? <Profile /> : <Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
