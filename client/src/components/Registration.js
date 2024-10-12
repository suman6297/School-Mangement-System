import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './registration.css'

const Registration = () => {
  const [className, setClass] = useState('');
  const [section, setSection] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/auth/register', { class: className, section, rollNumber, password });
    alert('Registration successful!');
    navigate("/login")
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h1 >class
      <input value={className} onChange={(e) => setClass(e.target.value)} placeholder="Class" required className='input'/> </h1>

      <h1 >Section<input value={section} onChange={(e) => setSection(e.target.value)} placeholder="Section" required className='input1' /></h1>


      <h1 > Roll Number <input value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} placeholder="Roll Number" required  className='input2'/>
        
    </h1>

     <h1  > Password<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required className='input3' /></h1>
     
      <button type="submit" className='button'>Register</button>
    </form>
  );
};

export default Registration;
