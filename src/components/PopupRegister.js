import { React, useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

export default function PopupRegister({ handleClosePopup, onSubmit, isOpen, openPopupSignIn }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isOpen) {
      setName('');
      setEmail('');
      setPassword('');
    }
  }, [isOpen]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmitItem = (event) => {
    event.preventDefault();
    onSubmit({ name, email, password });
  };

  const secondaryButton = (
    <div className="popup__secondary-btn-box">
      <p className="">or</p>
      <button onClick={openPopupSignIn} type="button" className="popup__btn_secondary">
        Sign in
      </button>
    </div>
  );

  return (
    <PopupWithForm
      btnType={'submit'}
      title="Sign up"
      button="Sign up"
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
      <label htmlFor="name" className="popup__label">
        Username
      </label>
      <input
        required
        type="text"
        id="name"
        minLength="2"
        maxLength="30"
        name="name"
        className="popup__form-input"
        placeholder="Name"
        onChange={handleInputChange}
        value={name}
      />
      <span className="popup__input-error card-title-error"></span>
    </PopupWithForm>
  );
}
