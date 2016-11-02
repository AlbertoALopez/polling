import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


export default class VotingBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }
    handleChange = (event, index, value) => {
        this.setState({ value });
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
            <div>
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
                    }}
                />
            </div>
        );
    }
}

VotingBox.propTypes = {
    answers: React.PropTypes.array.isRequired,
    pollId: React.PropTypes.number.isRequired,
    handleVote: React.PropTypes.func.isRequired,
};
