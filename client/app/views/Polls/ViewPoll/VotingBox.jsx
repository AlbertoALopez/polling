import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class VotingBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        };
        this.handleSubmit.bind(this);
    }
    handleChange = (event, index, value) => this.setState({ value });
    handleSubmit(event) {
        console.log('submit');
    }
    render() {
        return (
            <div>
                <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <MenuItem value={1} primaryText="Placeholder1" />
                    <MenuItem value={2} primaryText="Placeholder2" />
                    <MenuItem value={3} primaryText="Placeholder3" />
                    <MenuItem value={4} primaryText="Placeholder4" />
                    <MenuItem value={5} primaryText="Placeholder5" />
                </SelectField>
                <br />
                <RaisedButton
                    label="Submit"
                    primary={true}
                    onClick={this.handleSubmit}
                />
            </div>
        );
    }
}
