import React, { useState } from 'react';
import InputField from './InputField';
import { useLoginMutation } from '../services/auth';
import { showAlert } from '../utils/commonActions';

const AuthForm: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async () => {
    if (emailOrPhone && password) {
      try {
        await login({ emailOrPhone, password });
        showAlert('success', 'Logged in successfully');
      } catch {
        showAlert('error', 'Login failed');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Welcome! to Log-in only</h1>
      <InputField
        type="text"
        placeholder="Enter the phone number or e-mail"
        value={emailOrPhone}
        onChange={(e) => setEmailOrPhone(e.target.value)}
        validationMsg="11 or 14 digits phone number or valid email required"
        validate={(value) => /^[\d]{11}$|^[\d]{14}$|^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)}
      />
      <InputField
        type="password"
        placeholder="Enter the password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        validationMsg="Password must be at least 10 characters"
        validate={(value) => value.length >= 10}
      />
      <button
        onClick={handleLogin}
        disabled={isLoading}
        className="w-full p-2 bg-blue-500 text-white rounded mt-4"
      >
        {isLoading ? 'Logging in...' : 'Log In'}
      </button>
      <div className="mt-4 flex justify-between">
        <a href="/register" className="text-blue-500">New here? Register now.</a>
        <a href="/reset-password" className="text-blue-500">Forgot or Reset Password</a>
      </div>
    </div>
  );
};

export default AuthForm;