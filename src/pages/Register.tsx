import React, { useState } from 'react';
import InputField from '../components/InputField';
import { useRegisterMutation } from '../services/auth';
import { showAlert } from '../utils/commonActions';

const Register: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [register, { isLoading }] = useRegisterMutation();

  const handleRegister = async () => {
    if (emailOrPhone && password) {
      try {
        await register({ emailOrPhone, password });
        showAlert('success', 'Registered Successfully');
      } catch {
        showAlert('error', 'Registration failed');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Register</h1>
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
        validationMsg="Password must be at least 10 characters with at least one alphabet, one number, and one special character"
        validate={(value) => /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,}$/.test(value)}
      />
      <button
        onClick={handleRegister}
        disabled={isLoading}
        className="w-full p-2 bg-blue-500 text-white rounded mt-4"
      >
        {isLoading ? 'Registering...' : 'Register'}
      </button>
    </div>
  );
};

export default Register;