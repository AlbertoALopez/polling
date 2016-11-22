import React from 'react';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';


class QuestionItem extends React.Component {
    static propTypes = {
        question: React.PropTypes.string.isRequired,
        answers: React.PropTypes.array.isRequired,
        id: React.PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            questionValue: this.props.question,
        };
    }
    render() {
        const iconButtonElement = (
            <IconButton
                touch={true}
                tooltip="more"
                tooltipPosition="bottom-left"
            >
                <MoreVertIcon />
            </IconButton>
        );

        const RightIconMenu = (
            <IconMenu iconButtonElement={iconButtonElement}>
                <MenuItem onTouchTap={this.props.handleEditTouchTap} >Edit</MenuItem>
                <MenuItem onTouchTap={this.props.handleDeleteTouchTap}>Delete</MenuItem>
            </IconMenu>
        );
        return (
            <div>
                <ListItem
                    primaryText={this.props.question}
                    primaryTogglesNestedList={true}
                    // secondaryText={
                    //     `Created at: ${new Date(poll.createdAt).toDateString()}
                    //     Last updated: ${new Date(poll.updatedAt).toDateString()}`
                    // }
                    key={this.props.id}
                    rightIconButton={RightIconMenu}
                    nestedItems={[this.props.answers]}
                >
                </ListItem>
                <Divider />
            </div>
        );
    }
}

export default QuestionItem;
