import { React } from 'react';
import PopupWithForm from './PopupWithForm';

export default function PopupSuccess({ handleClosePopup, isOpen, openPopupSignIn }) {
  const handleButtonClick = () => {
    openPopupSignIn();
  };

  return (
    <PopupWithForm
      btnType={'button'}
      title="Registration successfully completed!"
      button="Sign in"
      handleClosePopup={handleClosePopup}
      onClick={handleButtonClick}
    ></PopupWithForm>
  );
}
