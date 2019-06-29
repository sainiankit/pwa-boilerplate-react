/* routes.js
Exports the frontend application's Router component,
Imports all the views defined in /views,
Each Route renders a React Component (views) out of /views,
Views are react components composed out of other react components from /components. */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import menu from './menu';

const Routes = () => (
  <div className="main-view-container">
    <Switch>
      {
        menu.map(menuItem => <Route key={menuItem.menuDisplayName} exact path={menuItem.path} component={menuItem.viewComponent} />)
      }
    </Switch>
  </div>
);

export default Routes;
