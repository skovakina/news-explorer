import React from 'react';
import '../blocks/SavedNews.css';
import NewsCardList from './NewsCardList.js';
import SavedNewsHeader from './SavedNewsHeader';

export default function SavedNews({ news, handleNewsMark, handleDeleteNews }) {
  return (
    <div className="saved-news">
      <SavedNewsHeader />
      <section className="saved-news-list">
        <div className="saved-news-list__container">
          <NewsCardList handleDeleteNews={handleDeleteNews} handleNewsMark={handleNewsMark} news={news} />
        </div>
      </section>
    </div>
  );
}
