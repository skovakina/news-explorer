import React from 'react';

export const CurrentUserContext = React.createContext({
  currentUser: {},
  isLoggedIn: false,
  keyword: '',
});
