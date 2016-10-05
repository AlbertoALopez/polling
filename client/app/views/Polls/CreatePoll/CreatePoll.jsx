/* View for poll creation */
import React from 'react';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';


class CreatePoll extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <TextField
                    hintText="Please enter a question for your poll"
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                />
            </div>
        );
    }
}

export default CreatePoll;
