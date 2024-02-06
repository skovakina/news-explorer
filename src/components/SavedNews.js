import React from 'react';
import '../blocks/SavedNews.css';
import NewsCardList from './NewsCardList.js';
import SavedNewsHeader from './SavedNewsHeader';

export default function SavedNews({ news, handleNewsMark }) {
  return (
    <div className="saved-news">
      <SavedNewsHeader />
      <section className="saved-news-list">
        <div className="saved-news-list__container">
          <NewsCardList handleNewsMark={handleNewsMark} news={news.articles} />
        </div>
      </section>
    </div>
  );
}
