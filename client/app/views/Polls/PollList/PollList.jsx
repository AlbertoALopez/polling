/* React component that displays a list of polls */
import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import { grey400 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import axios from 'axios';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '500px',
        marginTop: '20px',
        overflowY: 'auto',
        marginBottom: '100px',
    },
    gridTile: {
        background: grey400,
        paddingLeft: '10px'
    }
};

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
        return (
            <div style={styles.root}>
                <GridList
                    cellHeight={180}
                    style={styles.gridList}
                >
                    {this.state.polls.map((poll) => {
                        return (
                            <Link to={`/polls/${poll.id}`} key={poll.id}>
                                <GridTile
                                    key={poll.id}
                                    title={poll.question}
                                    subtitle={`Posted: ${poll.createdAt}`}
                                    style={styles.gridTile}
                                >
                                    { poll.question }
                                </GridTile>
                            </Link>
                        );
                    })}
                </GridList>
            </div>
        );
    }
}

export default PollList;
