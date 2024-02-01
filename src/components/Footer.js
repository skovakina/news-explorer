import React from 'react';
import facebook from '../images/facebook-icon.svg';
import github from '../images/github-icon.svg';
import '../blocks/Footer.css';

import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__credentials">© 2023 Supersite, Powered by News API</p>

      <div className="footer__links">
        <NavLink to="" className="footer__link">
          Home
        </NavLink>
        <a href="https://tripleten.com/" className="footer__link">
          TripleTen
        </a>
        <div className="footer__links-social">
          <a href="https://github.com/skovakina" className="footer__link">
            <img src={facebook} alt="Facebook" className="footer__links-social-image" />
          </a>
          <a href="https://www.facebook.com/svetlana.kovakina" className="footer__link">
            <img src={github} alt="Github" className="footer__links-social-image" />
          </a>
        </div>
      </div>
    </footer>
  );
}
