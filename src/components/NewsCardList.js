import React from 'react';

import NewsCard from './NewsCard';
import '../blocks/NewsCardList.css';

export default function NewsCardList({ news, props }) {
  return (
    <ul className="news-card-list">
      {news.map((article, i) => {
        return <NewsCard key={article._id ? article._id : i} article={article} props={props} />;
      })}
    </ul>
  );
}
