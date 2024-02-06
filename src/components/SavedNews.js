import React from 'react';
import '../blocks/SavedNews.css';
import NewsCardList from './NewsCardList.js';
import SavedNewsHeader from './SavedNewsHeader';
import data from '../utils/dummydata.js';

export default function SavedNews({ handleNewsMark }) {
  return (
    <div className="saved-news">
      <SavedNewsHeader />
      <section className="saved-news-list">
        <div className="saved-news-list__container">
          <NewsCardList handleNewsMark={handleNewsMark} data={data.articles} />
        </div>
      </section>
    </div>
  );
}
