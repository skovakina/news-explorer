import React from 'react';
import '../blocks/SavedNews.css';
import NewsCard from './NewsCard';
import SavedNewsHeader from './SavedNewsHeader';
import data from '../utils/dummydata.js';

export default function SavedNews({ handleNewsMark }) {
  return (
    <section>
      <SavedNewsHeader />
      {data.articles.map((article) => {
        return <NewsCard key={article._id} article={article} handleNewsMark={handleNewsMark} />;
      })}
    </section>
  );
}
