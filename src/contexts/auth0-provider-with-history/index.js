import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({
  domain,
  clientId,
  redirectUri,
  children,
}) => {
  const history = useHistory();

  const onRedirectCallback = (appState) => {
    let defaultReturnTo = '/profile';

    if (typeof window !== 'undefined') {
      defaultReturnTo = window.location.pathname;
    }
    history.push(appState?.returnTo || defaultReturnTo);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
