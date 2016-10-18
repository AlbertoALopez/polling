import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class AnswerSnackbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    handleTouchTap = () => {
        this.setState({
            open: true,
        });
    }
    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    }
    render() {
        return (
            <div>
                <FloatingActionButton
                    mini={true}
                    secondary={true}
                    onTouchTap={this.handleTouchTap}
                    onTouchTap={(event) => {
                        this.props.addAnswer(event);
                        this.handleTouchTap();
                    }}
                    className="add-answer-btn"
                    disabled={this.props.actionButtonDisabled}
                >
                    <ContentAdd />
                </FloatingActionButton>
                <Snackbar
                    open={this.state.open}
                    message="Answer added to list"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        );
    }
}

AnswerSnackbar.propTypes = {
    actionButtonDisabled: React.PropTypes.bool.isRequired,
    addAnswer: React.PropTypes.func.isRequired,
};

export default AnswerSnackbar;
