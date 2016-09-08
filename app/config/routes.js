/* React router config */
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import React from 'react';
import App from '../views/App.jsx';
import Home from '../views/Home/Home.jsx';


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
);

export default routes;
