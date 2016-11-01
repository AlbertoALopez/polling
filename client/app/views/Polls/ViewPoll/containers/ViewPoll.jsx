/* View for an individual poll  */
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PollChart from '../components/PollChart/PollChart.jsx';
import VotingBox from '../components/VotingBox/VotingBox.jsx';
import axios from 'axios';
import './_ViewPoll.scss';

class ViewPoll extends React.Component {
    constructor() {
        super();
        this.state = {
            answers: [],
            question: '',
            votes: [],
            pollId: '',
        };
    }
    componentDidMount() {
        const pollId = window.location.pathname.split('/')[2];
        axios.get(`/api/poll/${pollId}`)
        .then((response) => {
            console.log(response);
        });
    }
    render() {
        return (
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
    }
}

export default ViewPoll;
