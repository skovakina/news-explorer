import React from 'react';
import '../blocks/NewsCard.css';
import image from '../images/news-card-image.jpg';

export default function NewsCard() {
  return (
    <li className="news-card">
      <div className="news-card__header">
        <div className="news-card__category">Category</div>
        <div className="news-card__delete">
          <div className="news-card__delete-image"></div>
        </div>
      </div>
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
