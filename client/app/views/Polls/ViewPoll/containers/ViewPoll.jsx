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
            pollId: '',
        };
    }
    componentDidMount() {
        const pollId = window.location.pathname.split('/')[2];
        const that = this;
        axios.get(`/api/poll/${pollId}`)
        .then((response) => {
            that.setState({
                answers: response.data.Answers,
                votes: response.data.Votes,
                question: response.data.question,
                pollId,
            });
        })
        .catch((err) => {
            console.log(`Error retrieving poll: ${err}`);
        });
    }
    handleVote(e, answerId) {
        e.preventDefault();
        axios.put(`/api/vote/${answerId}`, {
            // No payload
        }).then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.error(`Error updating answer: ${err}`);
        });
    }
    render() {
        return (
            <Grid>
                <Row >
                    <Col xs={12}>
                        <PollChart
                            answers={this.state.answers}
                            question={this.state.question}
                            votes={this.state.votes}
                        />
                        <div className="voting-container">
                            <p>Vote on this poll</p>
                            <VotingBox
                                answers={this.state.answers}
                                pollId={this.state.pollId}
                                handleVote={this.handleVote}
                            />
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default ViewPoll;
