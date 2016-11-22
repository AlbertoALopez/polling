import React from 'react';
import UserCard from '../components/UserCard/UserCard.jsx';
import PollsCard from '../components/PollsCard/PollsCard.jsx';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import { withRouter } from 'react-router';
import './_Dashboard.scss';

class Dashboard extends React.Component {
    static propTypes = {
        id: React.PropTypes.string.isRequired,
        loggedIn: React.PropTypes.bool.isRequired,
        userName: React.PropTypes.string.isRequired,
        router: React.PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            polls: [],
            createdAt: '',
            updatedAt: '',
        };
    }
    componentDidMount() {
        const that = this;
        axios.get(`/api/user/${this.props.id}`)
        .then((response) => {
            that.setState({
                polls: response.data.polls,
                createdAt: response.data.user.createdAt,
                updatedAt: response.data.user.updatedAt,
            });
        })
        .catch((err) => {
            console.log(`There was an error: ${err}`);
            // Unauthenticated user or server error
            if (err.response.status === 500) {
                console.log('Could not load user info');
                that.props.router.replace({
                    pathname: '/',
                });
            }
        });
    }
    componentWillReceiveProps(nextProps) {
        const that = this;
        axios.get(`/api/user/${nextProps.id}`)
        .then((response) => {
            if (response.status === 500) {
                console.log('Could not load user info');
                replace({
                    pathname: '/',
                    state: {
                        nextPathname: nextState.location.pathname,
                    }
                })
                return;
            }
            console.log(response);
            that.setState({
                polls: response.data.polls,
                createdAt: response.data.user.createdAt,
                updatedAt: response.data.user.updatedAt,
            });
        })
        .catch((err) => {
            console.log(`There was an error: ${err}`);
        });
    }
    render() {
        return (
            <div className="dashboard-container">
                <Grid>
                    <Row center="xs">
                        <Col xs={12}>
                            <UserCard
                                userName={this.props.userName}
                                createdAt={this.state.createdAt}
                                updatedAt={this.state.updatedAt}
                            />
                            <PollsCard
                                polls={this.state.polls}
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default withRouter(Dashboard);
