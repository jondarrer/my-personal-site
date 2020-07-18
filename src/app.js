import React from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <Switch>
    <Route path="/" exact>
      <h1>home</h1>
    </Route>
    <Route>
      <h1>not-found</h1>
    </Route>
  </Switch>
);

export default App;
