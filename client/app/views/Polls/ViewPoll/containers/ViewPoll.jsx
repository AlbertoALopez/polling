/* View for an individual poll  */
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PollChart from '../components/PollChart/PollChart.jsx';
import VotingBox from '../components/VotingBox/VotingBox.jsx';
import axios from 'axios';
import './_ViewPoll.scss';
import hex from '../../../../utils/hex';

class ViewPoll extends React.Component {
    constructor() {
        super();
        this.state = {
            answers: [],
            question: '',
            pollId: '',
            colors: [],
        };
    }
    componentDidMount() {
        const pollId = window.location.pathname.split('/')[2];
        const that = this;
        axios.get(`/api/poll/${pollId}`)
        .then((response) => {
            const colors = [];
            response.data.Answers.forEach(() => {
                colors.push(hex.generate());
            });
            that.setState({
                answers: response.data.Answers,
                votes: response.data.Votes,
                question: response.data.question,
                pollId,
                colors,
            });
        })
        .catch((err) => {
            console.log(`Error retrieving poll: ${err}`);
        });
    }
    handleVote(e, answerId) {
        e.preventDefault();
        const that = this;
        axios.put(`/api/vote/${answerId}`, {
            // No payload
        }).then((response) => {
            const answers = that.state.answers.map((element, index) => {
                if (element.id === response.data.id) {
                    return response.data;
                }

                return element;
            });

            that.setState({
                answers,
            });
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
                            colors={this.state.colors}
                        />
                        <div className="voting-container">
                            <VotingBox
                                answers={this.state.answers}
                                pollId={this.state.pollId}
                                handleVote={this.handleVote.bind(this)}
                            />
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default ViewPoll;
