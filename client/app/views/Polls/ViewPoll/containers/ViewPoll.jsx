/* View for an individual poll  */
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from 'material-ui/Card';
import PollChart from '../components/PollChart/PollChart.jsx';
import VotingBox from '../components/VotingBox/VotingBox.jsx';
import axios from 'axios';
import './_ViewPoll.scss';
import hex from '../../../../utils/hex';

const styles = {
    cardTop: {
        padding: '15px',
        marginTop: '15px',
    },
    cardBottom: {
        padding: '15px',
        marginTop: '15px',
        marginBottom: '100px',
    },
};

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
            userName: this.props.userName,
        }).then((response) => {
            const answers = that.state.answers.map((answer, index) => {
                if (answer.id === response.data.id) {
                    return response.data;
                }

                return answer;
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
                    <Col xs={12} md={6}>
                        <Card style={styles.cardTop}>
                            <VotingBox
                                answers={this.state.answers}
                                pollId={this.state.pollId}
                                handleVote={this.handleVote.bind(this)}
                                loggedIn={this.props.loggedIn}
                            />
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card style={styles.cardBottom}>
                            <PollChart
                                answers={this.state.answers}
                                question={this.state.question}
                                votes={this.state.votes}
                                colors={this.state.colors}
                            />
                        </Card>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

ViewPoll.propTypes = {
    loggedIn: React.PropTypes.bool.isRequired,
    userName: React.PropTypes.string.isRequired,
};

export default ViewPoll;
