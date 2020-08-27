import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ApolloProvider } from '@apollo/client';

import App from './app';

import { client } from './client';

hydrate(
  <ApolloProvider client={client}>
    <HelmetProvider>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
