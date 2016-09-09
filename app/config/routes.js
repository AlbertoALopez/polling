/* React router config */
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import React from 'react';
import App from '../views/App.jsx';
import Home from '../views/Home/Home.jsx';
import Polls from '../views/Polls/Polls.jsx';


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/polls" component={Polls} />
            <IndexRoute component={Home} />
        </Route>
    </Router>
);

export default routes;
