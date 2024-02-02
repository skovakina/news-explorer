import React from 'react';
import '../blocks/SavedNewsHeader.css';

export default function SavedNewsHeader() {
  return (
    <header className="saved-news-header">
      <div className="saved-news-header__container">
        <p className="saved-news-header__sub-title">Saved articles</p>
        <h1 className="saved-news-header__title">Elise, you have 5 saved articles</h1>
        <p className="saved-news-header__text">
          By keywords: <span className="saved-news-header__categories">Nature, Yellowstone, and 2 other</span>{' '}
        </p>
      </div>
    </header>
  );
}
