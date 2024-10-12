import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/auth/login', { rollNumber, password });
    localStorage.setItem('token', res.data.token);
    alert('Login successful!');
    navigate("/dashboard")
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1> Roll Number
      <input value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} placeholder="Roll Number" required />
      </h1>
      <h1> Password
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
      </h1>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
