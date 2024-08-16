import React, { useState } from 'react';

interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validationMsg: string;
  validate: (value: string) => boolean;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, onChange, validationMsg, validate }) => {
  const [showWarning, setShowWarning] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setShowWarning(!validate(e.target.value));
  };

  return (
    <div className="mb-4">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {showWarning && <p className="text-red-500 text-sm mt-1">{validationMsg}</p>}
    </div>
  );
};

export default InputField;