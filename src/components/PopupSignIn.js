import { React, useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

export default function PopupSignIn({ handleClosePopup, onSubmit, isOpen, openPopupRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isOpen) {
      setEmail('');
      setPassword('');
    }
  }, [isOpen]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmitItem = (event) => {
    event.preventDefault();
    console.log('submit');
    onSubmit({ email, password });
  };

  const secondaryButton = (
    <div className="popup__secondary-btn-box">
      <p className="">or</p>
      <button onClick={openPopupRegister} type="button" className="popup__btn_secondary">
        Sign up
      </button>
    </div>
  );

  return (
    <PopupWithForm
      type="login"
      title="Sign in"
      button="Sign in"
      handleClosePopup={handleClosePopup}
      onSubmit={handleSubmitItem}
      secondaryButton={secondaryButton}
    >
      <label htmlFor="email" className="popup__label">
        Email
      </label>
      <input
        required
        type="email"
        id="email"
        name="email"
        className="popup__form-input"
        placeholder="Email"
        onChange={handleInputChange}
        value={email}
      />
      <span className="popup__input-error email-error"></span>

      <label htmlFor="password" className="popup__label">
        Password
      </label>
      <input
        required
        type="password"
        id="password"
        name="password"
        className="popup__form-input"
        placeholder="Password"
        onChange={handleInputChange}
        value={password}
      />
      <span className="popup__input-error password-error"></span>
    </PopupWithForm>
  );
}
