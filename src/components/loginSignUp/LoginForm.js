import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="w-96 mx-auto my-20">
      <h1 className="text-orange-500 text-3xl font-semibold mb-6">Login</h1>
      <div className="mb-4">
        <label className="block text-orange-400 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-orange-400 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

<div className='flex items-center'>
      <p className='px-3 text-gray-700 font-semibold'>Forgot password?</p>
      <a href="/">
      <p className='text-blue-500 underline'>Click me</p>
      </a>
</div>

      <div className='pt-5 flex justify-around items-center'>
      <button
        className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleLogin}
      >
        Log In
      </button>

      <Link to="/SignUp">
      <button
        className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button">
        Sign In
      </button>
      </Link>
      </div>

    </div>
  );
};

export default LoginForm;