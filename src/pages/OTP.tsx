import React, { useState } from 'react';
import InputField from '../components/InputField';
import { showAlert } from '../utils/commonActions';

const OTP: React.FC = () => {
  const [otp, setOTP] = useState('');

  const handleOTPVerification = () => {
    if (otp === '345678') {
      showAlert('success', 'OTP Verified Successfully');
    } else {
      showAlert('error', 'Invalid OTP');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Enter OTP</h1>
      <InputField
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOTP(e.target.value)}
        validationMsg="OTP must be 6 digits"
        validate={(value) => /^\d{6}$/.test(value)}
      />
      <button
        onClick={handleOTPVerification}
        className="w-full p-2 bg-blue-500 text-white rounded mt-4"
      >
        Verify OTP
      </button>
    </div>
  );
};

export default OTP;