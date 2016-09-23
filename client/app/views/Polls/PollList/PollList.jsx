/* React component that displays a list of polls */
import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { grey400, darkBlack } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import axios from 'axios';

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <Link to="polls/1"><MenuItem>View</MenuItem></Link>
        <MenuItem>Share</MenuItem>
        <MenuItem>Comment</MenuItem>
    </IconMenu>
);

class PollList extends React.Component {
    constructor() {
        super();
        this.state = {
            polls: [],
        };
    }
    componentWillMount() {
        this.init();
    }
    init() {
        const that = this;
        axios.get('/api/polls')
            .then((response) => {
                that.setState({
                    polls: response.data,
                });
            })
            .catch((error) => {
                console.log(`There was an error:\n${error}`);
            });
    }
    render() {
        const polls = this.state.polls.map((poll, index) => {
            return (
                <Link to={`/polls/view/${poll.id}`} key={poll.id}>
                    <ListItem
                        key={poll.id}
                        primaryText={poll.id}
                        secondaryText={
                            <p>
                                { poll.question }
                            </p>
                        }
                    />
                </Link>
            );
        });
        return (
            <div>
                <List>
                    <Subheader>Polls</Subheader>
                    {polls}
                </List>
            </div>
        );
    }
}

export default PollList;
