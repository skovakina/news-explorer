import React from 'react';
import '../blocks/SavedNewsHeader.css';

export default function SavedNewsHeader({ savedNewsCategories }) {
  const categoriesSorted = Array.from(new Set(savedNewsCategories));
  const categoriesString = categoriesSorted.slice(0, 2).join(', ');

  const headerText = () => {
    if (savedNewsCategories.length === 0) {
      return `Elise, you don't have saved articles`;
    }
    if (savedNewsCategories.length === 1) {
      return `Elise, you have 1 saved article`;
    }
    return `Elise, you have ${savedNewsCategories.length} saved articles`;
  };

  const categoriesText = () => {
    if (categoriesSorted.length === 0) {
      return;
    }
    if (categoriesSorted.length <= 2) {
      return (
        <p className="saved-news-header__text">
          By keywords: <span className="saved-news-header__categories">{categoriesString}</span>
        </p>
      );
    }
    return (
      <p className="saved-news-header__text">
        By keywords: <span className="saved-news-header__categories">{`${categoriesString}, and ${categoriesSorted.length - 2} other`}</span>
      </p>
    );
  };

  return (
    <header className="saved-news-header">
      <div className="saved-news-header__container">
        <p className="saved-news-header__sub-title">Saved articles</p>
        <h1 className="saved-news-header__title">{headerText()}</h1>
        {categoriesText()}
      </div>
    </header>
  );
}
