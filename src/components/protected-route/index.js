import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const ProtectedRoute = ({ children, ...args }) => (
  <Route
    component={withAuthenticationRequired(() => children, {
      onRedirecting: () => <div>Redirecting to login...</div>,
    })}
    {...args}
  />
);

export default ProtectedRoute;
