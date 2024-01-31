import { useEffect, useCallback } from 'react';
import iconClose from '../images/close-icon.svg';
import '../blocks/PopupWithForm.css';

export default function ModalWithForm({ children, type, title, button, secondaryButton, handleClosePopup, onSubmit }) {
  const escFunction = useCallback((event) => {
    if (event.key === 'Escape') {
      handleClosePopup();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  const handleOverlayClick = (event) => {
    console.log(event);
    if (event.target.classList.contains('popup')) {
      handleClosePopup();
    }
  };

  return (
    <div className={`popup popup__${type}`} onClick={handleOverlayClick}>
      <div className="popup__container popup__container_type_form">
        <button onClick={handleClosePopup} className="popup__btn-close">
          <img src={iconClose} alt="Close" className="popup__btn-close-img" />
        </button>
        <h2 className="popup__title">{title}</h2>

        <form onSubmit={onSubmit} className="popup__form" name="newClothesForm">
          {children}
          <div className="popup__buttons">
            <button type="submit" className="popup__btn-submit">
              {button}
            </button>
            {secondaryButton && secondaryButton}
          </div>
        </form>
      </div>
    </div>
  );
}
