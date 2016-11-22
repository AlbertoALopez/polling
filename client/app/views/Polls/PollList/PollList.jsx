/* React component that displays a list of polls */
import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import Check from 'material-ui/svg-icons/navigation/check';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';
import axios from 'axios';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginLeft: '10px',
        marginRight: '10px',
        background: '#F5F5F5',
    },
    gridList: {
        width: '500px',
        marginTop: '30px',
        overflowY: 'auto',
        marginBottom: '100px',
    },
    gridTile: {
        background: 'white',
        paddingLeft: '10px',
        border: '1px solid black',
    },
    gridTitle: {
        paddingTop: '20px',
        wordBreak: 'break-all',
    },
};

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
                <Subheader>Recent posts</Subheader>
                    {this.state.polls.map((poll) => {
                        return (
                            <Link to={`/polls/${poll.id}`} key={poll.id}>
                                <GridTile
                                    actionIcon={<IconButton><Check /></IconButton>}
                                    key={poll.id}
                                    title={`Votes: ${poll.votes}`}
                                    subtitle={`Posted: ${new Date(poll.createdAt).toDateString()}`}
                                    titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                                    style={styles.gridTile}
                                >
                                    <div style={styles.gridTitle}>{poll.question}</div>
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
