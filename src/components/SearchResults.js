import React from 'react';
import '../blocks/SearchResults.css';
import NewsCardList from './NewsCardList';
import data from '../utils/dummydata.js';
import NotFound from './NotFound';

export default function SearchResults({ handleNewsMark }) {
  return (
    <section className="search-results">
      <div className="search-results__container">
        <h2 className="search-results__title">Search results</h2>
        {/* <NotFound /> */}
        <NewsCardList handleNewsMark={handleNewsMark} data={data.articles.slice(0, 3)} />
        <button type="button" className="search-results__button">
          Show more
        </button>
      </div>
    </section>
  );
}
