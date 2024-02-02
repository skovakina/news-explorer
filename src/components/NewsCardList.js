import React from 'react';

import NewsCard from './NewsCard';
import '../blocks/NewsCardList.css';

export default function NewsCardList({ data, handleNewsMark }) {
  return (
    <ul className="news-card-list">
      {data.map((article) => {
        return <NewsCard key={article.source.id} article={article} handleNewsMark={handleNewsMark} />;
      })}
    </ul>
  );
}
