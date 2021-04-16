import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
  const tokenId = sessionStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={({ location }) =>
        tokenId !== null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/Login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
