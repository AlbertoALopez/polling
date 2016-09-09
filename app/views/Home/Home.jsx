/* About section react component */
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login/Login.jsx';
import PollList from '../Polls/PollList/PollList.jsx';

const styles = {
    container: {
        paddingTop: '30%',
    },
    paper: {
        display: 'inline-block',
        padding: '20px',
    },
    listContainer: {
        marginTop: '100px',
    },
};

const Home = () => {
    return (
        <Grid>
            <Row>
                <Col xs={12}>
                    <Row center="xs">
                        <Col xs={6}>
                            <div style={styles.container}>
                                <Paper zDepth={4} style={styles.paper}>
                                    <span style={styles.text}><p>Create, vote on and share polls made by you and your friends!
                                    </p><br /><p>Select a poll below or sign in to create your own!</p></span>
                                    <Login />
                                </Paper>
                            </div>
                        </Col>
                    </Row>
                    <div className="list-container" style={styles.listContainer}>
                        <PollList />
                    </div>
                </Col>
            </Row>
        </Grid>
    );
};

export default Home;
