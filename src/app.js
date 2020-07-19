import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';

import { HomePage } from './routes';

import { LanguageContext } from './contexts';
import { theme, i18n as _i18n } from './utils';

const availableLanguages = ['en', 'ro'];

const App = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route path="/" exact>
        <LanguageContext.Provider
          value={{ currentLanguage: 'en', availableLanguages }}
        >
          <HomePage />
        </LanguageContext.Provider>
      </Route>
      <Route path="/ro" exact>
        <LanguageContext.Provider
          value={{ currentLanguage: 'ro', availableLanguages }}
        >
          <HomePage />
        </LanguageContext.Provider>
      </Route>
      <Route>
        <h1>not-found</h1>
      </Route>
    </Switch>
  </ThemeProvider>
);

export default App;
