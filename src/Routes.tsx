import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PageRoutes } from './config/routes';

const Routes: React.FC = () => (
  <Switch>
    <Route path={PageRoutes.galleryRoute} exact={true}>
      <p>ok</p>
    </Route>
    <Route path={PageRoutes.aboutRoute}>
      <p>ok3 about</p>
    </Route>
    <Route path={PageRoutes.loginRoute}>
      <p>ok4 login</p>
    </Route>
  </Switch>
);

export default Routes;
