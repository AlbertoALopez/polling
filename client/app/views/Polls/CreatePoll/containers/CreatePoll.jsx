/* View for poll creation */
import React from 'react';
import TextField from 'material-ui/TextField';
import Card from 'material-ui/Card';
import { Row, Col } from 'react-flexbox-grid';
import validate from '../../../../utils/validate.js';
import AnswersList from '../components/AnswersList/AnswersList.jsx';
import SubmitDialog from '../components/SubmitDialog/SubmitDialog.jsx';
import AnswerSnackbar from '../components/AnswerSnackbar/AnswerSnackbar.jsx';
import './_CreatePoll.scss';

const styles = {
    cardTop: {
        padding: '15px',
        marginTop: '15px',
    },
    cardBottom: {
        padding: '15px',
        marginTop: '15px',
        marginBottom: '125px',
    },
};

class CreatePoll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionValue: '',
            questionErrorMsg: '',
            answerValue: '',
            answerErrorMsg: '',
            answers: [],
            actionButtonDisabled: false,
        };
    }
    handleQuestionChange = (event) => {
        this.setState({
            questionValue: event.target.value,
        });
        this.validateQuestion(event.target.value);
    }
    handleAnswerChange = (event) => {
        this.setState({
            answerValue: event.target.value,
        });
        this.validateAnswer(event.target.value);
    }
    validateQuestion(value) {
        let errorMsg = '';
        if (!validate.checkTextField(value)) {
            errorMsg = 'Please enter a valid question';
        }

        this.setState({
            questionErrorMsg: errorMsg,
        });
    }
    validateAnswer(value) {
        let errorMsg = '';
        if (!validate.checkTextField(value)) {
            errorMsg = 'Please enter a valid question';
            this.setState({
                actionButtonDisabled: true,
            });
        }

        else {
            this.setState({
                actionButtonDisabled: false,
            });
        }

        this.setState({
            answerErrorMsg: errorMsg,
        });
    }
    addAnswer(event) {
        event.preventDefault();
        // If user is trying to add an empty question to their answers list
        if (this.state.answerValue === '') {
            this.setState({
                actionButtonDisabled: true,
                answerErrorMsg: 'Please enter at least one question',
            });
            return;
        }
        const answersArray = this.state.answers;
        answersArray.push(this.state.answerValue);
        // Async set state with promises
        const statePromise = new Promise((resolve, reject) => {
            resolve(this.setState({
                actionButtonDisabled: true,
                answers: answersArray,
            }));
            reject(() => {
                console.log('Error updating state');
            });
        });
        statePromise.then(
            this.setState({
                answerValue: '',
            })
        );
    }
    updateAnswer(answerId, newAnswerValue) {
        const answers = this.state.answers.map((answer, index) => {
            if (index === answerId) {
                return newAnswerValue;
            }
            return answer;
        });
        this.setState({
            answers,
        });
    }
    deleteAnswer(answerId) {
        const answers = this.state.answers.filter((answer, index) => {
            return index !== answerId;
        });
        this.setState({
            answers,
        });
    }
    render() {
        return (
            <Row center="xs">
                <Col xs={10} lg={6}>
                    {!this.props.loggedIn ? (
                        <Card>
                            <div>
                                <br />
                                <p>Please log in to create a poll.</p>
                            </div>
                        </Card>
                    ) : (

                        <div>
                            <Card style={styles.cardTop}>
                                <div className="form">
                                    <div className="poll-description">
                                        <p>Enter your question and answers here. Please
                                        include at least one answer.</p>
                                    </div>
                                    <form
                                        className="text-field"
                                        onSubmit={(e) => e.preventDefault()}
                                    >
                                        <TextField
                                            id="question-field-controlled"
                                            value={this.state.questionValue}
                                            onChange={this.handleQuestionChange}
                                            errorText={this.state.questionErrorMsg}
                                            hintText="Question"
                                            fullWidth={true}
                                        />
                                        <TextField
                                            id="answer-field-controlled"
                                            value={this.state.answerValue}
                                            onChange={this.handleAnswerChange}
                                            errorText={this.state.answerErrorMsg}
                                            hintText="Answer"
                                            fullWidth={true}
                                            multiLine={true}
                                        />
                                        <AnswerSnackbar
                                            addAnswer={this.addAnswer.bind(this)}
                                            actionButtonDisabled={this.state.actionButtonDisabled}
                                        />
                                        <SubmitDialog
                                            answers={this.state.answers}
                                            question={this.state.questionValue}
                                            userName={this.props.userName}
                                        />
                                    </form>
                                </div>
                            </Card>
                            <Card style={styles.cardBottom}>
                                <AnswersList
                                    answers={this.state.answers}
                                    updateAnswer={this.updateAnswer.bind(this)}
                                    deleteAnswer={this.deleteAnswer.bind(this)}
                                />
                            </Card>
                        </div>
                    )}
                </Col>
            </Row>
        );
    }
}

CreatePoll.propTypes = {
    loggedIn: React.PropTypes.bool.isRequired,
    userName: React.PropTypes.string.isRequired,
};

export default CreatePoll;
