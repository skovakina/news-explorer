import React from 'react';

import NewsCard from './NewsCard';
import '../blocks/NewsCardList.css';

export default function NewsCardList() {
  return (
    <section className="news-card-list">
      <ul className="news-card-list__list">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </ul>
    </section>
  );
}
