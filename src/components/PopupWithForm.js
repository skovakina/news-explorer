import { useEffect, useCallback } from 'react';
import iconClose from '../images/close-icon.svg';
import '../blocks/PopupWithForm.css';

export default function ModalWithForm({ children, btnType, title, button, secondaryButton, handleClosePopup, onSubmit, onClick, isValid }) {
  const handleEsc = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        handleClosePopup();
      }
    },
    [handleClosePopup]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEsc, false);

    return () => {
      document.removeEventListener('keydown', handleEsc, false);
    };
  }, [handleEsc]);

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('popup')) {
      handleClosePopup();
    }
  };

  return (
    <div className="popup" onClick={handleOverlayClick}>
      <div className="popup__container popup__container_type_form">
        <button onClick={handleClosePopup} className="popup__btn-close">
          <img src={iconClose} alt="Close" className="popup__btn-close-img" />
        </button>
        <h2 className="popup__title">{title}</h2>

        <form onSubmit={onSubmit} className="popup__form" name="newClothesForm">
          {children}
          <div className="popup__buttons">
            <button disabled={!isValid && btnType === 'submit' ? true : false} type={btnType} className="popup__btn-submit" onClick={onClick}>
              {button}
            </button>
            {secondaryButton && secondaryButton}
          </div>
        </form>
      </div>
    </div>
  );
}
