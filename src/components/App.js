import {
  BrowserRouter,
  //  Route, Switch
} from 'react-router-dom';
import { React, useState } from 'react';
//  variables

//  components
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import AboutAuthor from './AboutAuthor';
//  context
import { CurrentUserContext } from '../contexts/CurrentUserContext';
//css
import '../blocks/App.css';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
        <BrowserRouter>
          <Header />
          <AboutAuthor />
          <Footer />
        </BrowserRouter>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
