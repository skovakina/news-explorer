import React from 'react';
import '../blocks/NewsCard.css';
import image from '../images/news-card-image.jpg';
import { useLocation } from 'react-router-dom';

export default function NewsCard({ key, article, handleNewsMark }) {
  const location = useLocation();
  const isMarked = false;
  // const isMarked = .... check if user saved this news

  //   {
  //   source: {
  //     id: null,
  //     name: 'MacRumors',
  //   },
  //   author: 'Juli Clover',
  //   title: 'Apple Seeds First Public Beta of macOS 14.4',
  //   description:
  //     'Apple today seeded the first beta of an upcoming macOS Sonoma 14.4 update to public beta testers, allowing non-developers to test the software ahead of its launch. The public beta comes a day after Apple released the developer beta. \n\n\n\n\n\nBeta testers can opt…',
  //   url: 'https://www.macrumors.com/2024/01/31/apple-seeds-first-public-beta-of-macos-14-4/',
  //   urlToImage: 'https://images.macrumors.com/t/2_H_ficbzzTio6tnEYYHj0421CQ=/2336x/article-new/2023/06/macos-sonoma-4.jpg',
  //   publishedAt: '2024-01-31T18:35:39Z',
  //   content:
  //     'Apple today seeded the first beta of an upcoming macOS Sonoma 14.4 update to public beta testers, allowing non-developers to test the software ahead of its launch. The public beta comes a day after A… [+467 chars]',
  // }

  const isMarkedClassName = `news-card__image ${isMarked ? 'news-card__image_type_bookmark-marked' : 'news-card__image_type_bookmark'}`;

  const renderHeader = () => {
    if (location.pathname === '/saved-news') {
      return (
        <div className="news-card__header">
          <div className="news-card__category">Category</div>
          <div className="news-card__icon">
            <div className="news-card__image news-card__image_type_delete"></div>
          </div>
        </div>
      );
    }
    return (
      <div className="news-card__header">
        <div className="news-card__icon">
          <div className={isMarkedClassName} onClick={() => handleNewsMark(isMarked)}></div>
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
    <li className="news-card">
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
