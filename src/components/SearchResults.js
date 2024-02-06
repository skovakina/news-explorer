import React from 'react';
import '../blocks/SearchResults.css';
import NewsCardList from './NewsCardList';
import NotFound from './NotFound';
import Preloader from './Preloader';

export default function SearchResults({ news, handleNewsMark, isLoading }) {
  console.log(news);
  return (
    <section className="search-results">
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="search-results__container">
          <h2 className="search-results__title">Search results</h2>

          {news.length === 0 ? <NotFound /> : <NewsCardList handleNewsMark={handleNewsMark} news={news.slice(0, 3)} />}

          <button type="button" className="search-results__button">
            Show more
          </button>
        </div>
      )}
    </section>
  );
}
