/* React component for a section of user editable answers */
import React from 'react';
import { List } from 'material-ui/List';
import ListItems from '../ListItems/ListItems.jsx';


const AnswersList = (props) => {
    return (
        <div>
            <h1>Answers</h1>
            <List
                className="answers-list"
            >
                <ListItems
                    answers={props.answers}
                    updateAnswer={props.updateAnswer}
                    deleteAnswer={props.deleteAnswer}
                />
            </List>
        </div>
    );
};

AnswersList.propTypes = {
    answers: React.PropTypes.array.isRequired,
    updateAnswer: React.PropTypes.func.isRequired,
    deleteAnswer: React.PropTypes.func.isRequired,
};

export default AnswersList;
