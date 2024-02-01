import React from 'react';
import '../blocks/SavedNews.css';
import NewsCard from './NewsCard';
import NewsCardList from './NewsCardList.js';
import SavedNewsHeader from './SavedNewsHeader';
import data from '../utils/dummydata.js';

export default function SavedNews({ handleNewsMark }) {
  return (
    <section>
      <SavedNewsHeader />
      <NewsCardList handleNewsMark={handleNewsMark} data={data.articles} />
    </section>
  );
}
