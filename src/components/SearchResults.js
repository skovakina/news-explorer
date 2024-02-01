import React from 'react';
import '../blocks/SearchResults.css';
import NewsCard from './NewsCard';
import data from '../utils/dummydata.js';

export default function SearchResults({ handleNewsMark }) {
  return (
    <section className="search-results">
      <ul className="search-results__list">
        {data.articles.slice(0, 3).map((article) => {
          return <NewsCard key={article._id} article={article} handleNewsMark={handleNewsMark} />;
        })}
      </ul>
      <button type="button" className="search-results__button">
        Show more
      </button>
    </section>
  );
}
