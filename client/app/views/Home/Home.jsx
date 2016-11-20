/* Home view react component */
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {cyan500} from 'material-ui/styles/colors';
import PollList from '../Polls/PollList/PollList.jsx';
import Landing from './Landing/Landing.jsx';
import './_Home.scss';


const styles = {
    landing: {
        backgroundColor: cyan500,
        color: 'white',
        // marginTop: '64px',
    },
};

const Home = (props) => {
    return (
        <div>
            <div style={styles.landing}>
                <Grid >
                    <Row>
                        <Col xs={12}>
                            <Row center="xs">
                                <Landing />
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
            <div className="list-container">
                <PollList />
            </div>
        </div>
    );
};

Home.propTypes = {
    loggedIn: React.PropTypes.bool,
    userName: React.PropTypes.string,
};

export default Home;
