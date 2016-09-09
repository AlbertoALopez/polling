import React from 'react';
import Paper from 'material-ui/Paper';

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
                <Paper style={style} zDepth={3} />
            </div>
        );
    }
}
