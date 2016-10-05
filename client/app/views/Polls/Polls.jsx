/* React view that displays a list of selectable polls */
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './_Polls.scss';

const Polls = (props) => {
    return (
        <Grid>
            <Row>
                <Col xs={12}>
                    {React.cloneElement(props.children, {
                        loggedIn: props.loggedIn,
                        userName: props.userName,
                    })}
                </Col>
            </Row>
        </Grid>
    );
};

export default Polls;
