import { Link } from 'react-router';
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import LoginModal from '../Home/Login/LoginModal.jsx';
import cyan500 from 'material-ui/styles/colors';


const NavbarTabs = (props) => {
    let profileButton;

    if (props.loggedIn) {
        profileButton =
            <FlatButton
                className="profile-button"
                label="Logout"
                labelPosition="before"
            />;
    }
    else {
        profileButton = <LoginModal backgroundColor={cyan500} />;
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
