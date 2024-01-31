import React from 'react';
import '../blocks/SearchResults.css';
import NewsCard from './NewsCard';

export default function SearchResults({ handleNewsMark }) {
  // if nothing is found show nothing found component
  // show preloader while searching fo news (after api)
  return (
    <section className="search-results">
      <ul className="search-results__list">
        <NewsCard handleNewsMark={handleNewsMark} />
      </ul>
      <button type="button" className="search-results__button">
        Show more
      </button>
    </section>
  );
}
