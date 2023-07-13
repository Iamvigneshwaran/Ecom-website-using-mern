import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import background from '../img/wp3537548.png'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login validation (e.g., check email and password against database)
    if (email === 'vicky@gmail.com' && password === 'vicky') {
      // Simulate login success
      setError('');
      onLogin(email); // Pass the email to the onLogin callback
    } else {
      // Simulate login failure
      setError('Invalid email or password');
    }
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic
    // ...
  };

  return (
    <div className="flex justify-center items-center h-screen " style={{background:`url(${background})`}}>
    <div className="max-w-md w-full mx-auto border p-4 bg-slate-50 rounded-lg font-serif">
      <h1 className="text-2xl font-extrabold mb-4 text-black ">Login</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">
            Password:
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Login
        </button>
      </form>
      <p className="mt-4">Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a></p>
      <div className="mt-4">
        <button onClick={handleGoogleLogin} className="bg-red-600 text-white px-4 py-2 rounded-md">
          Login with Google
        </button>
      </div>
    </div>
  </div>
  );
};

export default Login