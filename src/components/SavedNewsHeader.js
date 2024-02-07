import React from 'react';
import '../blocks/SavedNewsHeader.css';

export default function SavedNewsHeader({ savedNewsCategories }) {
  const categories = savedNewsCategories.slice(0, 2).join(', ');

  return (
    <header className="saved-news-header">
      <div className="saved-news-header__container">
        <p className="saved-news-header__sub-title">Saved articles</p>
        <h1 className="saved-news-header__title">{`Elise, you have ${savedNewsCategories.length} saved articles`}</h1>
        <p className="saved-news-header__text">
          By keywords: <span className="saved-news-header__categories">{`${categories}, and ${savedNewsCategories.length - 2} other`}</span>{' '}
        </p>
      </div>
    </header>
  );
}
