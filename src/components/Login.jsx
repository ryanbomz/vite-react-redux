// src/components/Login.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
    // Implement logic for API login here
  };

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-2xl font-semibold mb-4">Login Page</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
