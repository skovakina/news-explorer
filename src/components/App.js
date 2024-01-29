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
import PopupSuccess from './PopupSuccess';

//  context
import { CurrentUserContext } from '../contexts/CurrentUserContext';
//css
import '../blocks/App.css';
import PopupSignIn from './PopupSignIn';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState('');

  const closePopup = () => {
    setActiveModal('');
  };

  const openPopupRegister = () => {
    setActiveModal('register');
  };

  const openPopupSignIn = () => {
    setActiveModal('signin');
  };

  const openPopupSuccess = () => {
    setActiveModal('success');
  };

  const handleSignUp = (data) => {
    console.log('sign up', data);
    openPopupSuccess();
  };

  const handleSignIn = (data) => {
    console.log('sign in', data);
    closePopup();
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
              onSubmit={handleSignUp}
              openPopupSignIn={openPopupSignIn}
            />
          )}
          {activeModal === 'signin' && (
            <PopupSignIn
              handleClosePopup={closePopup}
              isOpen={activeModal === 'signin'}
              onSubmit={handleSignIn}
              openPopupRegister={openPopupRegister}
            />
          )}

          {activeModal === 'success' && <PopupSuccess handleClosePopup={closePopup} isOpen={activeModal === 'success'} />}

          <Footer />
        </BrowserRouter>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
