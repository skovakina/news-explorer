import React from 'react';
import '../blocks/NotFound.css';
import icon from '../images/not-found-icon.svg';

export default function NotFound() {
  return (
    <div className="not-found">
      <img src={icon} alt="Not found" className="not-found__image" />
      <h2 className="not-found__title">Nothing found</h2>
      <p className="not-found__text">Sorry, but nothing matched your search terms.</p>
    </div>
  );
}
