import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import ProviderPage from './containers/ProviderPage';
import StatusPage from './containers/StatusPage';
import NotFoundPage from './containers/NotFoundPage';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={ProviderPage} />
    <Route path='provider' component={ProviderPage} />
    <Route path='provider/:provider' component={ProviderPage} />
    <Route path='status' component={StatusPage} />
    <Route path='*' component={NotFoundPage} />
  </Route>
);
