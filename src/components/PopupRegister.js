import { React } from 'react';
import PopupWithForm from './PopupWithForm';
import Input from './Input';
import { useFormValidation } from '../hooks/UseFormValidation';

export default function PopupRegister({ handleClosePopup, onSubmit, openPopupSignIn }) {
  const formValidator = useFormValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: formValidator.values['email'], password: formValidator.values['password'], name: formValidator.values['name'] });
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
      <Input
        label="Name"
        type="name"
        name="name"
        placeholder="Name"
        value={formValidator.values['name'] || ''}
        onChange={formValidator.handleChange}
        error={formValidator.errors['name'] && 'Invalid name'}
        isValid={formValidator.isValid}
      />
    </PopupWithForm>
  );
}
