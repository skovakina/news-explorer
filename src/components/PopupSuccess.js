import { React, useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

export default function PopupSignIn({ handleClosePopup, isOpen }) {
  return (
    <PopupWithForm type="success" title="Registration successfully completed!" button="Sign in" handleClosePopup={handleClosePopup}></PopupWithForm>
  );
}
