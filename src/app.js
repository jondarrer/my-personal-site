import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui';

import { HomePage, BlogPage, BlogPostPage, ProfilePage } from './routes';
import { Layout, ProtectedRoute } from './components';
import { LanguageContext } from './contexts';
import { theme, i18n as _i18n } from './utils';

const availableLanguages = ['en', 'ro'];

const locales = ['ro', 'en-gb'];

const App = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route path="/" exact>
        <LanguageContext.Provider
          value={{ currentLanguage: 'en', availableLanguages }}
        >
          <Layout>
            <HomePage locales={locales} />
          </Layout>
        </LanguageContext.Provider>
      </Route>
      <Route path="/blog" exact>
        <LanguageContext.Provider
          value={{ currentLanguage: 'en', availableLanguages }}
        >
          <Layout>
            <BlogPage locales={locales} />
          </Layout>
        </LanguageContext.Provider>
      </Route>
      <Route path="/blog/:postId">
        <LanguageContext.Provider
          value={{ currentLanguage: 'en', availableLanguages }}
        >
          <Layout>
            <BlogPostPage locales={locales} />
          </Layout>
        </LanguageContext.Provider>
      </Route>
      <ProtectedRoute path="/profile" exact>
        <LanguageContext.Provider
          value={{ currentLanguage: 'en', availableLanguages }}
        >
          <Layout>
            <ProfilePage />
          </Layout>
        </LanguageContext.Provider>
      </ProtectedRoute>
      <Route path="/ro">
        <LanguageContext.Provider
          value={{ currentLanguage: 'ro', availableLanguages }}
        >
          <Layout>
            <Switch>
              <Route path="/ro" exact>
                <HomePage locales={locales} />
              </Route>
              <Route path="/ro/blog" exact>
                <BlogPage locales={locales} />
              </Route>
              <Route path="/ro/blog/:postId">
                <BlogPostPage locales={locales} />
              </Route>
              <ProtectedRoute path="/ro/profile" exact>
                <ProfilePage />
              </ProtectedRoute>
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
