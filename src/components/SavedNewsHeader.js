import React, { useContext } from 'react';
import '../blocks/SavedNewsHeader.css';

// context

import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function SavedNewsHeader({ savedNewsCategories }) {
  const { currentUser } = useContext(CurrentUserContext);

  const categoriesSorted = Array.from(new Set(savedNewsCategories));
  const categoriesString = categoriesSorted.slice(0, 2).join(', ');

  const headerText = () => {
    console.log(currentUser);
    if (savedNewsCategories.length === 0) {
      return `${currentUser.name}, you don't have saved articles`;
    }
    if (savedNewsCategories.length === 1) {
      return `${currentUser.name}, you have 1 saved article`;
    }
    return `${currentUser.name}, you have ${savedNewsCategories.length} saved articles`;
  };

  const categoriesText = () => {
    if (categoriesSorted.length === 0) {
      <p className="saved-news-header__text">
        By keywords: <span className="saved-news-header__categories"></span>
      </p>;
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
