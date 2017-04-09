import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import Page404 from './containers/Page404';
import ByUsername from './containers/ByUsername';
//la route principal c'est App tout ce qui est contenu dans app est automatiquement un children
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="tweets/:username" component={ByUsername} />
    <Route path="404" component={Page404} />
    <Redirect from="*" to="404" />
  </Route>
);
