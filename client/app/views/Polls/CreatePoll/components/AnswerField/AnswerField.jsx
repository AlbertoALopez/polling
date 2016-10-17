import React from 'react';

class AnswerField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answerValue: '',
            answerErrorMsg: '',
        };
    }
    render() {
        return (
            <TextField
                id="text-field-controlled"
                value={this.state.answerValue}
                onChange={this.handleAnswerChange}
                errorText={this.state.answerErrorMsg}
                hintText="Answer"
                fullWidth={true}
            />
        );
    }
}

AnswerField.propTypes = {

};

export default AnswerField;
