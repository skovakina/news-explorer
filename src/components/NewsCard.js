import React from 'react';
import '../blocks/NewsCard.css';
import image from '../images/news-card-image.jpg';
import { useLocation } from 'react-router-dom';

export default function NewsCard({ handleNewsMark }) {
  const location = useLocation();
  const isMarked = false;
  // const isLiked = card.likes.includes(currentUser._id);

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

  return (
    <li className="news-card">
      {renderHeader()}
      <img src={image} alt="{card.name}" className="item-card__image" />
      <div className="news-card__body">
        <div className="news-card__date">November 4, 2020</div>
        <h3 className="news-card__title">Everyone Needs a Special 'Sit Spot' in Nature</h3>
        <p className="news-card__text">
          Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...
        </p>
        <p className="news-card__publisher">treehugger</p>
      </div>
    </li>
  );
}
