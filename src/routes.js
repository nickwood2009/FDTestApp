import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/pages/home/HomePage';
import ProducePage from './components/pages/produce/ProducePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="produce" component={ProducePage} />
    </Route>
);