import React, { useContext } from 'react';
import '../blocks/Navbar.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import { NavLink } from 'react-router-dom';

export default function Navbar({ openPopupRegister }) {
  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);

  return (
    <nav className="nav">
      <div className="nav__logo">
        <p>News Explorer</p>
      </div>
      <div className="nav__navbar">
        {!isLoggedIn ? (
          <div className="nav__navbar-links">
            <NavLink to="/" className="nav__navbar-link">
              <p className="nav__navbar-link-text">Home</p>
            </NavLink>
            <button onClick={openPopupRegister} type="button" className="nav__navbar-button">
              Sign Up
            </button>
          </div>
        ) : (
          <div className="nav__profile">
            <button type="button" className="nav__profile-add-clothes-btn">
              + Add clothes
            </button>
            {/* <NavLink to="/" className="header__profile-link">
              <p className="header__profile-user-name"></p>
              <img alt="Avatar" className="header__profile-user-avatar" />
            </NavLink> */}
          </div>
        )}
      </div>
    </nav>
  );
}
