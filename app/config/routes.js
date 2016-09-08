/* React router config */
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import React from 'react';
import App from '../components/App/App.jsx';
import About from '../components/About/About.jsx';


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={About} />
        </Route>
    </Router>
);

export default routes;
