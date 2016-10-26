/* Dialog component that propmts the user on their entered answers */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import axios from 'axios';
import './_SubmitDialog.scss';


class SubmitDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            submissionError: false,
        };
    }
    handleOpen = () => {
        this.setState({
            open: true,
        });
    }
    handleClose = () => {
        this.setState({
            open: false,
        });
    }
    validateFields = () => {
        let submissionError = false;
        if (this.props.answers.length < 1 || !this.props.question) {
            submissionError = true;
        }

        this.setState({
            submissionError,
        });
    }
    handleSubmit = () => {
        const that = this;
        axios({
            method: 'POST',
            url: 'api/createpoll',
            baseURL: '/',
            data: {
                userName: that.props.userName,
                answers: that.props.answers,
                question: that.props.question,
            },
        })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(`There was an error submitting post: ${err}`);
        });
    }
    render() {
        const errorMsg = 'Please enter a valid question and at least one answer.';
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={this.handleSubmit}
            />,
        ];
        return (
            <div>
                <RaisedButton
                    className="submit-btn"
                    label="Submit"
                    primary={true}
                    onTouchTap={() => {
                        this.validateFields();
                        this.handleOpen();
                    }}
                />
                <Dialog
                    title="Review your poll"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <div>
                        {this.state.submissionError ? (
                            <span id="error-msg"><p>{errorMsg}</p></span>
                        ) : (
                            <div>
                                <br />
                                <h3>Question</h3>
                                <br />
                                <p>{this.props.question}</p>
                                <br />
                                <h3>Answers</h3>
                                <List>
                                    {this.props.answers.map((answer, index) => {
                                        return (
                                            <ListItem
                                                className="answer-item"
                                                primaryText={answer}
                                                key={index}
                                            />
                                        );
                                    })}
                                </List>
                            </div>
                        )}

                    </div>
                </Dialog>
            </div>
        );
    }
}

SubmitDialog.propTypes = {
    question: React.PropTypes.string.isRequired,
    answers: React.PropTypes.array.isRequired,
    userName: React.PropTypes.string,
};

export default SubmitDialog;
