import React from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import { Row } from 'react-flexbox-grid';
import QuestionItem from '../QuestionItem/QuestionItem.jsx';
import Item from '../Item/Item.jsx';
import './_PollsCard.scss';


const styles = {
    card: {
        textAlign: 'left',
        marginTop: '30px',
        marginBottom: '150px',
    },
};

class PollsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            polls: [],
            edited: [],
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            polls: nextProps.polls,
        });
    }
    updatePoll(pollId, newPollQuestion) {
        const polls = this.state.polls.map((poll, index) => {
            if (poll.id === pollId) {
                poll.question = newPollQuestion;
            }
            return poll;
        });

        this.setState({
            polls,
        });
    }
    updateAnswer(pollId, answerId, newAnswerValue) {
        const polls = this.state.polls.map((poll, index) => {
            if (poll.id === pollId) {
                poll.Answers.map((answer, index) => {
                    if (answer.id === answerId) {
                        answer.answer = newAnswerValue;
                    }
                    return answer;
                });
            }
            return poll;
        });
        this.setState({
            polls,
        });
    }
    deletePoll(pollId) {
        const polls = this.state.polls.filter((poll, index) => {
            return poll.id !== pollId;
        });
        this.setState({
            polls,
        });
    }
    deleteAnswer(pollId, answerId) {
        const polls = this.state.polls.map((poll, index) => {
            if (poll.id === pollId) {
                poll.Answers = poll.Answers.filter((answer, index) => {
                    return answer.id !== answerId;
                });
            }
            return poll;
        });
        this.setState({
            polls,
        });
    }
    render() {
        return (
            <Card style={styles.card}>
                <CardTitle title="Your polls" />
                <CardText>
                    <p>Review your polls here.
                     Click on one to expand and see its related questions.
                     </p>
                    <br />
                    <Divider />
                    <List>
                        {this.state.polls.map((poll) => {
                            const answers = poll.Answers.map((answer) => {
                                return (
                                    <Item
                                        answer={answer}
                                        pollId={poll.id}
                                        updateAnswer={this.updateAnswer.bind(this)}
                                        deleteAnswer={this.deleteAnswer.bind(this)}
                                    />
                                );
                            });
                            return (
                                <QuestionItem
                                    answers={answers}
                                    id={poll.id}
                                    question={poll.question}
                                    updatePoll={this.updatePoll.bind(this)}
                                    deletePoll={this.deletePoll.bind(this)}
                                />
                            );
                        })}
                    </List>
                </CardText>
            </Card>
        );
    }
}

export default PollsCard;
