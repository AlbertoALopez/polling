/* View that displays a list of selectable polls */
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './_Polls.scss';


const Polls = (props) => {
    return (
        <div>
            {React.cloneElement(props.children, {
                loggedIn: props.loggedIn,
                userName: props.userName,
            })}
        </div>
    );
};

export default Polls;
