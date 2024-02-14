import { React, useState, useContext } from 'react';
import '../blocks/Navbar.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import { NavLink, useLocation } from 'react-router-dom';

export default function Navbar({ openPopupRegister, handleLogout, activeModal }) {
  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleThemeChange = () => {
    if (location.pathname === '/') {
      return 'nav_theme_light';
    } else if (location.pathname === '/saved-news') {
      return 'nav_theme_dark';
    }
    return '';
  };

  const handleNavHidden = () => {
    if (Boolean(activeModal)) {
      return 'nav_hidden';
    }
    return '';
  };

  return (
    <nav className={`nav ${handleNavHidden()} ${handleThemeChange()} ${isNavOpen ? `nav_opened` : ''}`}>
      <div className="nav__container">
        <div className="nav__logo">
          <p>News Explorer</p>
        </div>

        {!isLoggedIn ? (
          <div className="nav__links">
            <NavLink to="/" className="nav__link" activeClassName="nav__link_active">
              <p className="nav__link-text">Home</p>
            </NavLink>
            <button onClick={openPopupRegister} type="button" className="nav__button">
              Sign Up
            </button>
          </div>
        ) : (
          <div className="nav__links">
            <NavLink exact to="/" className="nav__link" activeClassName="nav__link_active">
              <p className="nav__link-text">Home</p>
            </NavLink>
            <NavLink to="/saved-news" className="nav__link" activeClassName="nav__link_active">
              <p className="nav__link-text">Saved articles</p>
            </NavLink>
            <button onClick={handleLogout} type="button" className="nav__button nav__button_logout">
              {currentUser.name} <div className="nav__logout-image"></div>
            </button>
          </div>
        )}
      </div>
      <button onClick={toggleMenu} type="button" className={`nav__menu-button ${isNavOpen ? `nav__menu-button_close` : ''}`}></button>
    </nav>
  );
}
