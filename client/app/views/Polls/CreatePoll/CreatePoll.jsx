/* View for poll creation */
import React from 'react';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';

class CreatePoll extends React.Component {
    constructor() {
        super();
        this.state = {
            questionValue: '',
        };
    }
    handleChange = (event) => {
        this.setState({
            questionValue: event.target.value,
        });
    }
    render() {
        return (
            <div>
                <TextField
                    id="text-field-controlled"
                    value={this.state.questionValue}
                    onChange={this.handleChange}
                    hintText="Please enter a question"
                />
            </div>
        );
    }
}

export default CreatePoll;
