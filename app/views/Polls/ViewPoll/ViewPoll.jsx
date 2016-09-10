/* View for individual poll  */
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PollChart from './PollChart.jsx';


const ViewPoll = () => (
    <Grid>
        <Row center="xs">
            <Col xs={8}>
                <PollChart />
            </Col>
        </Row>
    </Grid>
);

export default ViewPoll;
