import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import App from '../../ui/layouts/App';
import Bar from '../../ui/pages/Bar';
import Cards from '../../ui/pages/Cards';
import Card from '../../ui/pages/Card';
import Home from '../../ui/pages/Home';

const AppRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to='home' />
      <Route path="home" component={Home} />
      <Route path="bar" component={Bar} />
      <Route path="cards" component={Cards}>
        <Route path="1" component={Card} />
      </Route>
    </Route>
  </Router>
);

export default AppRoutes;
