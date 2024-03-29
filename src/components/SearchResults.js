import { React, useState } from 'react';
import '../blocks/SearchResults.css';
import NewsCardList from './NewsCardList';
import NotFound from './NotFound';
import Preloader from './Preloader';

export default function SearchResults({ news, isLoading, ...props }) {
  const [displayedNewsCount, setDisplayedNewsCount] = useState(3);

  const showMore = () => {
    setDisplayedNewsCount((prevCount) => prevCount + 3);
  };
  return (
    <section className="search-results">
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="search-results__container">
          <h2 className="search-results__title">Search results</h2>

          {news.length === 0 ? <NotFound /> : <NewsCardList news={news.slice(0, displayedNewsCount)} props={props} />}

          {news.length > displayedNewsCount && (
            <button type="button" className="search-results__button" onClick={showMore}>
              Show more
            </button>
          )}
        </div>
      )}
    </section>
  );
}
