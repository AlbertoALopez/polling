/* React router config */
import React from 'react';
import App from '../components/App/App.jsx';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={App} />
        </Route>
    </Router>
);

export default routes;
