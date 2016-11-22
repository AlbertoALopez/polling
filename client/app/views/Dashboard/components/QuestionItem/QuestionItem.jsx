import React from 'react';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import validate from '../../../../utils/validate.js';


class QuestionItem extends React.Component {
    static propTypes = {
        question: React.PropTypes.string.isRequired,
        answers: React.PropTypes.array.isRequired,
        id: React.PropTypes.string.isRequired,
        updatePoll: React.PropTypes.func.isRequired,
        deletePoll: React.PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            questionValue: this.props.question,
            errorMsg: '',
        };
    }
    handleEditOpen = () => {
        this.setState({
            editing: !this.state.editing,
        });
    }
    handleValueChange = (event) => {
        this.setState({
            questionValue: event.target.value,
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
        this.props.updatePoll(this.props.id,
                                        this.state.questionValue);
        this.setState({
            editing: false,
        });
    }
    render() {
        const iconButtonElement = (
            <IconButton
                touch={true}
                tooltip="More"
                tooltipPosition="bottom-left"
            >
                <MoreVertIcon />
            </IconButton>
        );

        const RightIconMenu = (
            <IconMenu iconButtonElement={iconButtonElement}>
                <MenuItem onTouchTap={this.handleEditOpen} >Edit</MenuItem>
                <MenuItem onTouchTap={() => this.props.deletePoll(this.props.id)}>Delete</MenuItem>
            </IconMenu>
        );

        let item;
        if (this.state.editing) {
            item =
                <form
                    onSubmit={(event) => this.finishEdit(event)}
                >
                    <TextField
                        className="answer-item"
                        id="edit-question-field"
                        value={this.state.questionValue}
                        onChange={this.handleValueChange}
                        errorText={this.state.answerErrorMsg}
                        fullWidth={true}
                        key={this.props.id}
                    />
                </form>;
        }
        else {
            item =
                <div>
                    <ListItem
                        primaryText={this.props.question}
                        primaryTogglesNestedList={true}
                        key={this.props.id}
                        rightIconButton={RightIconMenu}
                        nestedItems={[this.props.answers]}
                    />
                    <Divider />
                </div>;
        }
        return (
            item
        );
    }
}

export default QuestionItem;
