import React from 'react';
import '../blocks/NewsCard.css';
import { useLocation } from 'react-router-dom';

export default function NewsCard({ key, article, handleNewsMark, handleDeleteNews }) {
  const isMarkedClassName = `news-card__image ${article.isMarked ? 'news-card__image_type_bookmark-marked' : 'news-card__image_type_bookmark'}`;

  const location = useLocation();
  const renderHeader = () => {
    if (location.pathname === '/saved-news') {
      return (
        <div className=" news-card__header   news-card__header_saved">
          <div className="news-card__category">{article.category}</div>
          <div className="news-card__icon">
            <div className="news-card__image news-card__image_type_delete" onClick={() => handleDeleteNews(article)}></div>
          </div>
        </div>
      );
    }
    return (
      <div className="news-card__header">
        <div className="news-card__icon">
          <div className={isMarkedClassName} onClick={() => handleNewsMark(article)}></div>
        </div>
      </div>
    );
  };

  const formatDate = (publishedAt) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(publishedAt);
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <li key={key} className="news-card">
      {renderHeader()}
      <img src={article.urlToImage} alt={article.title} className="item-card__image" />
      <div className="news-card__body">
        <div className="news-card__date">{formatDate(article.publishedAt)}</div>
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__text">{article.content.replace(/\[.*?\]/g, '')}</p>
        <p className="news-card__publisher">{article.source.name}</p>
      </div>
    </li>
  );
}
