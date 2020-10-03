import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ApolloProvider } from '@apollo/client';

import { Auth0ProviderWithHistory } from './contexts';

import App from './app';

import { client } from './graphql/client';

let defaultRedirectUri = 'http://localhost:9000';

if (typeof window !== 'undefined') {
  defaultRedirectUri = window.location.pathname;
}

hydrate(
  <ApolloProvider client={client}>
    <HelmetProvider>
      <Router>
        <Auth0ProviderWithHistory
          domain="dev-fmp-jd.eu.auth0.com"
          clientId="lIC1vPuV312FCMD3TF179459b0CGDSm2"
          redirectUri={defaultRedirectUri}
        >
          <App />
        </Auth0ProviderWithHistory>
      </Router>
    </HelmetProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
