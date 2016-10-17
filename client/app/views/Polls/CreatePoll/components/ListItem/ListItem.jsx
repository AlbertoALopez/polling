/* React component for an single answer list item */
import React from 'react';
import { ListItem } from 'material-ui/List';
import Edit from 'material-ui/svg-icons/image/edit';
import Delete from 'material-ui/svg-icons/action/delete';
import TextField from 'material-ui/TextField';
import validate from '../../../../../utils/validate.js';
import './_ListItem.scss';


const styles = {
    buttons: {
        marginTop: '10px',
    },
};

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            answerValue: this.props.answer,
            errorMsg: '',
        };
    }
    handleClick() {
        this.setState({
            editing: !this.state.editing,
        });
    }
    handleAnswerChange = (event) => {
        this.setState({
            answerValue: event.target.value,
        });
        this.validateAnswer(event.target.value);
    }
    validateAnswer(value) {
        let errorMsg = '';
        if (!validate.checkTextField(value)) {
            errorMsg = 'Please enter a valid question';
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
        this.props.updateAnswer(this.props.index, this.state.answerValue);
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
                        onChange={this.handleAnswerChange}
                        errorText={this.state.answerErrorMsg}
                        fullWidth={true}
                    />
                </form>;
        }

        else {
            item =
                <ListItem
                    className="answer-item"
                    primaryText={this.props.answer}
                    key={this.props.index}
                    rightIconButton={
                        <div style={styles.buttons}>
                            <Edit
                                onTouchTap={() => this.handleClick()}
                            />
                            <Delete
                                onTouchTap={() => this.props.deleteAnswer(this.props.index)}
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

Item.propTypes = {
    answer: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired,
    updateAnswer: React.PropTypes.func.isRequired,
    deleteAnswer: React.PropTypes.func.isRequired,
};

export default Item;
