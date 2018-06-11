import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FullStack from './components/full-stack/fullstack';
import Frontend from './components/front-end/frontend';
import DataVisualization from './components/visualization/visualization';

const Routes = (props) => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path='/projects/fullstack' component={FullStack} />
      <Route exact path='/projects/frontend' component={Frontend} />
      <Route exact path='/projects/visualization' component={DataVisualization} />
      <Route component={FullStack} />
    </Switch>
  </BrowserRouter>
);

export default Routes;