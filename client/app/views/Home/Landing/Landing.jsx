/* Home section react component */
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {cyan500} from 'material-ui/styles/colors';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ActionDone from 'material-ui/svg-icons/action/done';
import SocialShare from 'material-ui/svg-icons/social/share';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Login from '../Login/Login.jsx';


const styles = {
    landingContainer: {
        paddingTop: '10%',
    },
    svgIcon: {
        height: '50px',
        width: '50px',
        color: 'white',
        margin: '20px',
    },
    landingText: {
        fontSize: '20px',
        display: 'block',
        position: 'relative',
        padding: '100px'
    },
};

const Landing = (props) => {
    return (
        <div style={styles.landingContainer} className="landing-container">
            <div>
                <Grid>
                    <Row center="xs">
                        <Col xs={12} md={4}>
                            <h1>Create</h1>
                            <ContentCreate
                                style={styles.svgIcon}
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <h1>Vote</h1>
                            <ActionDone
                                style={styles.svgIcon}
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <h1>Share</h1>
                            <SocialShare
                                style={styles.svgIcon}
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
            <div style={styles.landingText} className="landing-text">
                <p>Create, vote on and share polls made by you and your friends!</p>
                <br />
                <p>Select a poll below or login with Google to create your own.</p>
                <Row center="xs">
                    <Login
                        loggedIn={props.loggedIn}
                    />
                    <Link to="/polls/all">
                        <RaisedButton
                            label="See all"
                            className="linkButton"
                        />
                    </Link>
                </Row>
            </div>
        </div>
    );
};

Landing.propTypes = {
    loggedIn: React.PropTypes.bool,
    userName: React.PropTypes.string,
};

export default Landing;
