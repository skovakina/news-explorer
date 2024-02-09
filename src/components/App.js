import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
//  variables
import { getNews } from '../utils/NewsApi';
import { getItems, postItem, deleteItem } from '../utils/serverApi';
//  components

import Header from './Header';
import Footer from './Footer';
import AboutAuthor from './AboutAuthor';
import PopupRegister from './PopupRegister';
import PopupSuccess from './PopupSuccess';
import Navbar from './Navbar';
import SavedNews from './SavedNews';
import SearchResults from './SearchResults';
import ProtectedRoute from './ProtectedRoute';

//  context
import { CurrentUserContext } from '../contexts/CurrentUserContext';
//css
import '../blocks/App.css';
import PopupSignIn from './PopupSignIn';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState('');
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [startSearch, setStartSearch] = useState(false);
  const [savedNews, setSavedNews] = useState([]);
  const [keyWord, setKeyWord] = useState('');

  useEffect(() => {
    setLoggedIn(localStorage.getItem('isLoggedIn'));

    const storedArticles = localStorage.getItem('articles');
    if (storedArticles) {
      setNews(JSON.parse(storedArticles));
      setStartSearch(true); //render articles
    }
  }, []);

  useEffect(() => {
    getItems()
      .then((items) => {
        setSavedNews(items);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
    openPopupSuccess();
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setLoggedIn(false);
  };

  const handleSignIn = (data) => {
    setCurrentUser(data);
    setLoggedIn(true);
    localStorage.setItem('isLoggedIn', isLoggedIn);
    closePopup();
  };

  const handleNewsMark = (article) => {
    article.isMarked = true;
    article.category = keyWord;
    postItem(article)
      .then((res) => {
        setSavedNews([res, ...savedNews]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSearch = (keyword) => {
    setStartSearch(true);
    setIsLoading(true);
    getNews(keyword)
      .then((res) => {
        setNews(res.articles);
        setKeyWord(keyword);
        localStorage.setItem('articles', JSON.stringify(res.articles));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  const handleDeleteNews = (article) => {
    deleteItem(article._id)
      .then(() => {
        const updatedList = savedNews.filter((item) => item._id !== article._id);
        setSavedNews(updatedList);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider
        value={{
          currentUser,
          isLoggedIn,
        }}
      >
        <BrowserRouter>
          <Navbar openPopupRegister={openPopupRegister} handleLogout={handleLogout} activeModal={activeModal} />

          <Switch>
            <ProtectedRoute isLoggedIn={isLoggedIn} path="/saved-news">
              <SavedNews handleNewsMark={handleNewsMark} news={savedNews} handleDeleteNews={handleDeleteNews} />
            </ProtectedRoute>
            <Route exact path="/">
              <Header handleSearch={handleSearch} />

              {startSearch && <SearchResults handleNewsMark={handleNewsMark} news={news} isLoading={isLoading} />}
              <AboutAuthor />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
        {activeModal === 'success' && (
          <PopupSuccess handleClosePopup={closePopup} isOpen={activeModal === 'success'} openPopupSignIn={openPopupSignIn} />
        )}
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
