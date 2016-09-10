import React from 'react';
import Paper from 'material-ui/Paper';
import PollList from './PollList/PollList.jsx';

export default class Polls extends React.Component {
    render() {
        const style = {
            height: '100px',
            width: '100px',
            margin: '20px',
            textAlign: 'center',
            display: 'inline-block',
        };
        return (
            <div>
                <PollList />
            </div>
        );
    }
}
