import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from './routes';

import { LanguageContext } from './contexts';
import { i18n as _i18n } from './utils';

const App = () => (
  <Switch>
    <Route path="/" exact>
      <LanguageContext.Provider value="en">
        <HomePage />
      </LanguageContext.Provider>
    </Route>
    <Route path="/ro" exact>
      <LanguageContext.Provider value="ro">
        <HomePage />
      </LanguageContext.Provider>
    </Route>
    <Route>
      <h1>not-found</h1>
    </Route>
  </Switch>
);

export default App;
