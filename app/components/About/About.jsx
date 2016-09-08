/* About section react component */
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';

const styles = {
    container: {
        paddingTop: '40%',
    },
    paper: {
        display: 'inline-block',
        // height: '300px',
        padding: '20px',
        // paddingTop: '30%',
    },
    text: {
        // display: 'flex',
        // alignItems: 'center',
    }
};

const About = () => {
    return (
        <Grid>
            <Row>
                <Col xs={12}>
                    <Row center="xs">
                        <Col xs={6}>
                            <div style={styles.container}>
                                <Paper zDepth={4} style={styles.paper}>
                                    <span style={styles.text}><p>Create, vote on and share polls made by you and your friends!
                                    </p><br /><p>Select a poll or sign in below to get started.</p></span>
                                </Paper>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Grid>
    );
};

export default About;
