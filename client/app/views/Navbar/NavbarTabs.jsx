import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import LoginModal from '../Home/Login/LoginModal.jsx';
import cyan500 from 'material-ui/styles/colors';
import auth from '../../utils/auth.js';
import { Link } from 'react-router';


const NavbarTabs = (props) => {
    let profileButton;

    if (props.loggedIn) {
        profileButton =
            <FlatButton
                className="navbar-btn"
                label="Logout"
                labelPosition="before"
                onTouchTap={(e) => auth.logout(e)}
            />;
    }
    else {
        profileButton =
            <FlatButton
                className="navbar-btn"
                label="Login"
                labelPosition="before"
                onTouchTap={(e) => auth.login(e)}
            />;
    }
    return (
        <div>
            <Link to="/">
                <FlatButton className="navbar-btn" label="Home" icon={<ActionHome />} />
            </Link>
            {profileButton}
        </div>
    );
};

NavbarTabs.propTypes = {
    loggedIn: React.PropTypes.bool,
};

export default NavbarTabs;
