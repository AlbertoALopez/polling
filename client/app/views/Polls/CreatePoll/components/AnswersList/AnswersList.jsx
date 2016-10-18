/* React component for a section of user editable answers */
import React from 'react';
import { List } from 'material-ui/List';
import Item from '../Item/Item.jsx';
import './_AnswersList.scss';


const AnswersList = (props) => {
    return (
        <div>
            <h1>Answers</h1>
            <List
                className="answers-list"
            >
            {props.answers.map((answer, index) => {
                return (
                    <Item
                        answer={answer}
                        index={index}
                        key={index}
                        deleteAnswer={props.deleteAnswer}
                        updateAnswer={props.updateAnswer}
                    />
                );
            }, this)}
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
