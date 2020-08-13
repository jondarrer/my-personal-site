import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';

import { HomePage } from './routes';
import { Layout } from './components';
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
          <Layout>
            <HomePage />
          </Layout>
        </LanguageContext.Provider>
      </Route>
      <Route path="/ro">
        <LanguageContext.Provider
          value={{ currentLanguage: 'ro', availableLanguages }}
        >
          <Layout>
            <Switch>
              <Route path="/ro" exact>
                <HomePage />
              </Route>
              <Route path="*">
                <h1>nu-a-fost-gasit</h1>
              </Route>
            </Switch>
          </Layout>
        </LanguageContext.Provider>
      </Route>
      <Route path="*">
        <LanguageContext.Provider
          value={{ currentLanguage: 'en', availableLanguages }}
        >
          <Layout>
            <h1>not-found</h1>
          </Layout>
        </LanguageContext.Provider>
      </Route>
    </Switch>
  </ThemeProvider>
);

export default App;
