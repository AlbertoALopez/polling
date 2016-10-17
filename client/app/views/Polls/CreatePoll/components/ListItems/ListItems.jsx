/* Container for a list of answer items */
import React from 'react';
import Item from '../ListItem/ListItem.jsx';


const ListItems = (props) => {
    return (
        <div>
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
        </div>
    );
};

ListItems.propTypes = {
    answers: React.PropTypes.array.isRequired,
    updateAnswer: React.PropTypes.func.isRequired,
    deleteAnswer: React.PropTypes.func.isRequired,
};

export default ListItems;
