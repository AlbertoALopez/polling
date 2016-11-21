/* Login dialog react component */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import LoginModal from './LoginModal.jsx';
import './_Login.scss';
import { Link } from 'react-router';

const Login = (props) => {
    let profileButton;

    if (props.loggedIn) {
        profileButton =
            <Link to="/polls/createpoll">
                <RaisedButton
                    className="profile-button"
                    label="Create a poll"
                    labelPosition="before"
                />
            </Link>;
    }
    else {
        profileButton = <LoginModal />;
    }

    return (
        <div>
            {profileButton}
        </div>
    );
};

Login.propTypes = {
    loggedIn: React.PropTypes.bool.isRequired,
};

export default Login;
