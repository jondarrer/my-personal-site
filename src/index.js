import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './app';

hydrate(
  <HelmetProvider>
    <Router>
      <App />
    </Router>
  </HelmetProvider>,
  document.getElementById('root')
);
