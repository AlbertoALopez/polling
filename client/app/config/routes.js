/* React router config */
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import React from 'react';
import App from '../views/App.jsx';
import Home from '../views/Home/Home.jsx';
import Polls from '../views/Polls/Polls.jsx';
import ViewPoll from '../views/Polls/ViewPoll/ViewPoll.jsx';
import PollList from '../views/Polls/PollList/PollList.jsx';
import CreatePoll from '../views/Polls/CreatePoll/containers/CreatePoll.jsx';


const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route component={Polls}>
                <Route path="polls/all" component={PollList} />
                <Route path="polls/createpoll" component={CreatePoll} />
                <Route path="polls/:pollId" component={ViewPoll} />
            </Route>
            <IndexRoute component={Home} />
        </Route>
    </Router>
);

export default routes;
