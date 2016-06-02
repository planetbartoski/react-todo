import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import TodoPage from './components/TodoPage';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';

/**
 * Routes for the React-Router
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={TodoPage} />
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
