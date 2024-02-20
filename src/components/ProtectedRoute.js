import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const ProtectedRoute = ({ children, ...rest }) => {
  const { isLoggedIn } = useContext(CurrentUserContext);

  // return <Route {...rest}>{isLoggedIn ? children : <Redirect to="/" />}</Route>;
  return (
    <Route {...rest}>
      {isLoggedIn ? (
        children
      ) : (
        <Redirect
          push
          to={{
            pathname: '/',
            state: { referrer: '/saved-news' },
          }}
        />
      )}
    </Route>
  );
};

export default ProtectedRoute;
