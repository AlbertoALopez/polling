import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import './_VotingBox.scss';


export default class VotingBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            open: false,
        };
    }
    handleChange = (event, index, value) => {
        this.setState({
            value,
        });
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
        const menuItems = this.props.answers.map((value, index) => {
            return (
                <MenuItem
                    value={value.id}
                    key={value.id}
                    primaryText={value.answer}
                />
            );
        });
        return (
            <div className="voting-container">
                <p>Vote on this poll</p>
                <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    { menuItems }
                </SelectField>
                <br />
                <RaisedButton
                    label="Submit"
                    primary={true}
                    onClick={(e) => {
                        this.props.handleVote(e, this.state.value);
                        this.handleTouchTap();
                    }}
                />
                <Snackbar
                    open={this.state.open}
                    message="Vote added to total"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        );
    }
}

VotingBox.propTypes = {
    answers: React.PropTypes.array.isRequired,
    pollId: React.PropTypes.number.isRequired,
    handleVote: React.PropTypes.func.isRequired,
    loggedIn: React.PropTypes.bool.isRequired,
};
