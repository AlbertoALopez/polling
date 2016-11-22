import React from 'react';
import { ListItem } from 'material-ui/List';
import Edit from 'material-ui/svg-icons/image/edit';
import Delete from 'material-ui/svg-icons/action/delete';
import TextField from 'material-ui/TextField';
import validate from '../../../../utils/validate.js';


const styles = {
    buttons: {
        marginTop: '10px',
    },
};

class Item extends React.Component {
    static propTypes = {
        answer: React.PropTypes.array.isRequired,
        pollId: React.PropTypes.string.isRequired,
        updateAnswer: React.PropTypes.func.isRequired,
        deleteAnswer: React.PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            answerErrorMsg: '',
            answerValue: this.props.answer.answer,
        };
    }
    handleClick() {
        this.setState({
            editing: !this.state.editing,
        });
    }
    handleValueChange = (event) => {
        this.setState({
            answerValue: event.target.value,
        });
        this.validateAnswer(event.target.value);
    }
    validateAnswer(value) {
        let errorMsg = '';
        if (!validate.checkTextField(value)) {
            errorMsg = 'Please enter a valid answer';
        }

        this.setState({
            errorMsg,
        });
    }
    finishEdit(event) {
        event.preventDefault();
        this.setState({
            editing: false,
        });
        this.props.updateAnswer(this.props.pollId,
                                this.props.answer.id,
                                this.state.answerValue);
    }
    render() {
        let item;
        if (this.state.editing) {
            item =
                <form
                    onSubmit={(event) => this.finishEdit(event)}
                >
                    <TextField
                        className="answer-item"
                        id="editAnswer-field-controlled"
                        value={this.state.answerValue}
                        onChange={this.handleValueChange}
                        errorText={this.state.answerErrorMsg}
                        fullWidth={true}
                    />
                </form>;
        }
        else {
            item =
                <ListItem
                    insetChildren={true}
                    primaryText={this.props.answer.answer}
                    key={this.props.answer.id}
                    secondaryText={`Votes: ${this.props.answer.votes}`}
                    rightIconButton={
                        <div style={styles.buttons}>
                            <Edit
                                onTouchTap={() => this.handleClick()}
                            />
                            <Delete
                                onTouchTap={() => this.props.deleteAnswer(
                                    this.props.pollId,
                                    this.props.answer.id)}
                            />
                        </div>
                    }
                />;
        }
        return (
            <div>
                {item}
            </div>
        );
    }
}

export default Item;
