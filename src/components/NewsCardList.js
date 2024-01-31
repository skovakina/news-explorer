import React from 'react';

import NewsCard from './NewsCard';
import '../blocks/NewsCardList.css';

export default function NewsCardList({ handleNewsMark }) {
  return (
    <section className="news-card-list">
      <ul className="news-card-list__list">
        <NewsCard handleNewsMark={handleNewsMark} />
        <NewsCard />
      </ul>
    </section>
  );
}
