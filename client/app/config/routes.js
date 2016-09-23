/* React router config */
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import React from 'react';
import App from '../views/App.jsx';
import Home from '../views/Home/Home.jsx';
import Polls from '../views/Polls/Polls.jsx';
import ViewPoll from '../views/Polls/ViewPoll/ViewPoll.jsx';
import CreatePoll from '../views/Polls/CreatePoll/CreatePoll.jsx';
import PollList from '../views/Polls/PollList/PollList.jsx';


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/polls" component={Polls}>
                <Route path="list" component={PollList} />
                <Route path="createpoll" component={CreatePoll} />
                <Route path="view/:pollId" component={ViewPoll} />
            </Route>
            <IndexRoute component={Home} />
        </Route>
    </Router>
);

export default routes;
