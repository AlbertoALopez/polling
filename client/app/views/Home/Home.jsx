/* Home section react component */
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login/Login.jsx';
import PollList from '../Polls/PollList/PollList.jsx';
import './_Home.scss';


const Home = () => {
    return (
        <Grid>
            <Row>
                <Col xs={12}>
                    <Row center="xs">
                        <Col xs={8}>
                            <div className="container">
                                <Paper zDepth={4} className="paper">
                                    <span className="text"><p>Create, vote on and share polls made by you and your friends!
                                    </p><br /><p>Select a poll below or sign in to create your own.</p></span>
                                    <Row center="xs">
                                        <Login />
                                        <Link to="/polls">
                                            <RaisedButton
                                                label="See all polls"
                                                className="linkButton"
                                            />
                                        </Link>
                                    </Row>
                                </Paper>
                            </div>
                        </Col>
                    </Row>
                    <div className="list-container" className="listContainer">
                        <PollList />
                    </div>
                </Col>
            </Row>
        </Grid>
    );
};

export default Home;
