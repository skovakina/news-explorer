import React from 'react';

import NewsCard from './NewsCard';
import '../blocks/NewsCardList.css';

export default function NewsCardList({ news, handleNewsMark }) {
  console.log(news);
  return (
    <ul className="news-card-list">
      {news.map((article) => {
        return <NewsCard key={article.source.id} article={article} handleNewsMark={handleNewsMark} />;
      })}
    </ul>
  );
}
