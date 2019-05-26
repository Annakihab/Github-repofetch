import React from 'react';
import { MemoryRouter, Route, Switch } from 'react-router-dom';

import FeedContainer from '../containers/feed';


const AppRoutes = () => {
  return (
    // @todo use browser router and generate prerendered options.html page for chrome extension
    <MemoryRouter>
      <Switch>
        <Route exact path='/' component={ FeedContainer }/>
        <Route component={ FeedContainer }/>
      </Switch>
    </MemoryRouter>
  );
};

