import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is Home Page
      </Route>
      <Route exact path="/starred">
        This is Starred Page
      </Route>
      <Route>Not Found</Route>
    </Switch>
  );
}

export default App;
