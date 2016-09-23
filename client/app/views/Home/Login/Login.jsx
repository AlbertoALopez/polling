/* Login dialog react component */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import LoginModal from './LoginModal.jsx';
import './_Login.scss';

const Login = (props) => {
    let profileButton;

    if (props.loggedIn) {
        profileButton =
            <RaisedButton
                className="profile-button"
                label="Create a poll"
                labelPosition="before"
            />;
    }
    else {
        profileButton = <LoginModal />;
    }

    return (
        <div>
            {profileButton}
        </div>
    );
}

Login.propTypes = {
    loggedIn: React.PropTypes.bool.isRequired,
};

export default Login;
