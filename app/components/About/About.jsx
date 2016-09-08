import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

const About = () => {
    return (
        <Grid>
            <Row>
                <Col xs={12}>
                    <Row center="xs">
                        <div>
                            <p>Create, vote on and share polls made by you and your friends!
                            Select a poll or sign in below to get started.</p>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Grid>
    );
};

export default About;
