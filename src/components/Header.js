import React from 'react';
import '../blocks/Header.css';
import Navbar from './Navbar';

export default function Header({ openPopupRegister }) {
  return (
    <div className="header">
      <Navbar openPopupRegister={openPopupRegister} />
      <div className="header__box">
        <h1 className="header__title">What's going on in the world?</h1>
        <p className="header__subtitle">Find the latest news on any topic and save them in your personal account.</p>
      </div>
    </div>
  );
}
