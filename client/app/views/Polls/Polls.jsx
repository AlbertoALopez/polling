/* React view that displays a list of selectable polls */
import React from 'react';
import Paper from 'material-ui/Paper';
import PollList from './PollList/PollList.jsx';
import './_Polls.scss';

export default class Polls extends React.Component {
    render() {
        return (
            <div className="polls-container">
                <PollList />
            </div>
        );
    }
}
