import React from 'react';
import { List, ListItem } from 'material-ui/List';

const AnswersList = (props) => {
    const answers = props.answers.map((answer, index) => {
        return (
            <ListItem
                primaryText={answer}
                key={index}
            />
        );
    });
    return (
        <div>
            <h1>Answers</h1>
            <List
                className="answers-list"
            >
                {answers}
            </List>
        </div>
    );
};

AnswersList.propTypes = {
    answers: React.PropTypes.array.isRequired,
};

export default AnswersList;
