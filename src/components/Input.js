import React from 'react';
import '../blocks/Input.css';

export default function Input({ label, type, name, placeholder, value, onChange, error }) {
  const handleActiveInput = () => (value ? console.log('yes') : '');
  return (
    <div className="input">
      <label htmlFor={name} className="input__label">
        {label}
      </label>
      <input
        required
        type={type}
        id={name}
        name={name}
        className={`input__input ${value ? 'input__input_active' : ''}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <span className={`input__error ${name}-error`}>{error}</span>
    </div>
  );
}
