import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { React, useState } from 'react';
//  variables

//  components

import Header from './Header';
import Footer from './Footer';
import AboutAuthor from './AboutAuthor';
import PopupRegister from './PopupRegister';
import PopupSuccess from './PopupSuccess';
import Navbar from './Navbar';
import SavedNewsHeader from './SavedNewsHeader';
import SavedNews from './SavedNews';
import NewsCardList from './NewsCardList';

//  context
import { CurrentUserContext } from '../contexts/CurrentUserContext';
//css
import '../blocks/App.css';
import PopupSignIn from './PopupSignIn';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(true);
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

  const handleLogout = () => {
    //   setLoggedIn(false);
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
          <Navbar openPopupRegister={openPopupRegister} handleLogout={handleLogout} />

          <Switch>
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
            <Route exact path="/saved-news">
              <SavedNews />
            </Route>
            <Route exact path="/">
              <Header />
              <AboutAuthor />
              <NewsCardList />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
