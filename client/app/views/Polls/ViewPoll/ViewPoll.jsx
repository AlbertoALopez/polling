/* View for an individual poll  */
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PollChart from './PollChart.jsx';
import VotingBox from './VotingBox.jsx';
import './_ViewPoll.scss';

const ViewPoll = () => (
    <Grid>
        <Row >
            <Col xs={12}>
                <PollChart />
                <div className="voting-container">
                    <p>Vote on this poll</p>
                    <VotingBox />
                </div>
            </Col>
        </Row>
    </Grid>
);

export default ViewPoll;
