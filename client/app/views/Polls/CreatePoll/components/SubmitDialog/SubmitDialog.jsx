/* Dialog component that propmts the user on their entered answers */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import './_SubmitDialog.scss';


class SubmitDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
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
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];
        return (
            <div>
                <RaisedButton
                    className="submit-btn"
                    label="Submit"
                    primary={true}
                    type="submit"
                    onTouchTap={this.handleOpen}
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
                </Dialog>

            </div>
        );
    }
}

SubmitDialog.propTypes = {
    question: React.PropTypes.string.isRequired,
    answers: React.PropTypes.array.isRequired,
};

export default SubmitDialog;
