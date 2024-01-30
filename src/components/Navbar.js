import React, { useContext } from 'react';
import '../blocks/Navbar.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import { NavLink, useLocation } from 'react-router-dom';

export default function Navbar({ openPopupRegister, handleLogout }) {
  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);
  const location = useLocation();
  console.log(isLoggedIn);

  const handleThemeChange = () => {
    if (location.pathname === '/') {
      return 'nav_theme_light';
    } else if (location.pathname === '/saved-news') {
      return 'nav_theme_dark';
    }
    return '';
  };

  return (
    <nav className={`nav ${handleThemeChange()}`}>
      <div className="nav__logo">
        <p>News Explorer</p>
      </div>
      <div className="nav__navbar">
        {!isLoggedIn ? (
          <div className="nav__navbar-links">
            <NavLink to="/" className="nav__navbar-link" activeClassName="nav__navbar-link_active">
              <p className="nav__navbar-link-text">Home</p>
            </NavLink>
            <button onClick={openPopupRegister} type="button" className="nav__navbar-button">
              Sign Up
            </button>
          </div>
        ) : (
          <div className="nav__navbar-links">
            <NavLink exact to="/" className="nav__navbar-link" activeClassName="nav__navbar-link_active">
              <p className="nav__navbar-link-text">Home</p>
            </NavLink>
            <NavLink to="/saved-news" className="nav__navbar-link" activeClassName="nav__navbar-link_active">
              <p className="nav__navbar-link-text">Saved articles</p>
            </NavLink>
            <button onClick={handleLogout} type="button" className="nav__navbar-button">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
