/* View for an individual poll  */
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PollChart from './PollChart.jsx';
import VotingBox from './VotingBox.jsx';

const styles = {
    container: {
        padding: '20px',
    },
};

const ViewPoll = () => (
    <Grid>
        <Row >
            <Col xs={12}>
                <PollChart />
                <div style={styles.container}>
                    <p>Vote on this poll</p>
                    <VotingBox />
                </div>
            </Col>
        </Row>
    </Grid>
);

export default ViewPoll;
