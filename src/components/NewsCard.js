import { React, useContext, useEffect, useState } from 'react';
import '../blocks/NewsCard.css';
import defaultImage from '../images/news-image.jpg';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function NewsCard({ article, props }) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const [isHovering, setIsHovering] = useState(false);
  const [card, setCard] = useState({});

  const isMarkedClassName = `news-card__icon-image ${
    card._id ? 'news-card__icon-image_type_bookmark-marked' : 'news-card__icon-image_type_bookmark'
  }`;
  const location = useLocation();

  useEffect(() => {
    setCard({
      keyword: article.keyword ? article.keyword : null,
      title: article.title,
      description: article.description,
      publishedAt: article.publishedAt,
      source: article.source,
      url: article.url,
      urlToImage: article.urlToImage,
      _id: article._id ? article._id : null,
    });
  }, [article.keyword, article.title, article.description, article.publishedAt, article.source, article.url, article.urlToImage, article._id]);

  const handleSave = () => {
    props.handleSaveNews(card, (res) => {
      setCard(res);
    });
  };

  const handleDelete = () => {
    props.handleDeleteNews(card);
  };

  const handleCLick = () => {
    if (card._id) {
      handleDelete();
      card._id = null;
    } else {
      handleSave();
    }
  };

  const renderHeader = () => {
    if (location.pathname === '/saved-news') {
      return (
        <div className=" news-card__header   news-card__header_saved">
          <div className="news-card__category">{article.keyword}</div>
          {isHovering && <div className="news-card__popup">Remove from saved</div>}
          <div className="news-card__icon">
            <div
              className="news-card__icon-image news-card__icon-image_type_delete"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => handleDelete()}
            ></div>
          </div>
        </div>
      );
    }
    return (
      <div className="news-card__header">
        {isHovering && !isLoggedIn && <div className="news-card__popup">Sign in to save articles</div>}
        <div className="news-card__icon">
          <div
            className={isMarkedClassName}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => (isLoggedIn ? handleCLick() : props.openPopupRegister())}
          ></div>
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
      <img src={card.urlToImage || defaultImage} alt={card.title} className="news-card__image" />
      <div className="news-card__body">
        <div className="news-card__date">{formatDate(card.publishedAt)}</div>
        <h3 className="news-card__title">{card.title}</h3>
        <p className="news-card__text">{card.description}</p>
        <p className="news-card__publisher">{card.source}</p>
      </div>
    </li>
  );
}
