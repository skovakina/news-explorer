import { React } from 'react';
import PopupWithForm from './PopupWithForm';
import { useFormValidation } from '../hooks/UseFormValidation';
import Input from './Input';

export default function PopupSignIn({ handleClosePopup, onSubmit, isOpen, openPopupRegister }) {
  const formValidator = useFormValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: formValidator.values['email'], password: formValidator.values['password'] });
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
      btnType={'submit'}
      title="Sign in"
      button="Sign in"
      handleClosePopup={handleClosePopup}
      onSubmit={handleSubmit}
      secondaryButton={secondaryButton}
      isValid={formValidator.isValid}
    >
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="Email"
        value={formValidator.values['email'] || ''}
        onChange={formValidator.handleChange}
        error={formValidator.errors['email'] && 'Invalid email address'}
        isValid={formValidator.isValid}
      />

      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="Password"
        value={formValidator.values['password'] || ''}
        onChange={formValidator.handleChange}
        error={formValidator.errors['password'] && 'Invalid password'}
        isValid={formValidator.isValid}
      />
    </PopupWithForm>
  );
}
