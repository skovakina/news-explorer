import React from 'react';

import NewsCard from './NewsCard';
import '../blocks/NewsCardList.css';

export default function NewsCardList({ news, handleNewsMark, handleDeleteNews }) {
  return (
    <ul className="news-card-list">
      {news.map((article) => {
        return <NewsCard article={article} handleNewsMark={handleNewsMark} handleDeleteNews={handleDeleteNews} />;
      })}
    </ul>
  );
}
