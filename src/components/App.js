import {
  BrowserRouter,
  //  Route, Switch
} from 'react-router-dom';
import { React, useState } from 'react';
//  variables

//  components

import Header from './Header';
import Footer from './Footer';
import AboutAuthor from './AboutAuthor';
import PopupRegister from './PopupRegister';
//  context
import { CurrentUserContext } from '../contexts/CurrentUserContext';
//css
import '../blocks/App.css';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState('');

  const openPopupRegister = () => {
    setActiveModal('register');
  };

  const closePopup = () => {
    setActiveModal('');
  };

  return (
    <div className="App">
      <CurrentUserContext.Provider
        value={{
          currentUser,
          isLoggedIn,
        }}
      >
        <BrowserRouter>
          <Header openPopupRegister={openPopupRegister} />
          <AboutAuthor />
          {activeModal === 'register' && (
            <PopupRegister
              handleClosePopup={closePopup}
              isOpen={activeModal === 'register'}
              // onAddItem={handleSignup}
              openPopup={openPopupRegister}
            />
          )}
          <Footer />
        </BrowserRouter>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
