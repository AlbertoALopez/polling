import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import LoginModal from '../../Home/components/Login/LoginModal.jsx';
import { Link } from 'react-router';
import auth from '../../../utils/auth.js';


const styles = {
    icons: {
        // color: 'white',
    },
};

const NavbarTabs = (props) => {
    let profileButton;

    if (props.loggedIn) {
        profileButton =
            <FlatButton
                style={styles.icons}
                className="navbar-btn"
                label="Logout"
                labelPosition="before"
                onTouchTap={(e) => auth.logout(e)}
            />;
    }
    else {
        profileButton =
            <FlatButton
                style={styles.icons}
                className="navbar-btn"
                label="Login"
                labelPosition="before"
                onTouchTap={(e) => auth.login(e)}
            />;
    }
    return (
        <div>
            <Link to="/">
                <FlatButton
                    className="navbar-btn"
                    icon={<ActionHome style={styles.icon} />}
                />
            </Link>
            {profileButton}
        </div>
    );
};

NavbarTabs.propTypes = {
    loggedIn: React.PropTypes.bool,
};

export default NavbarTabs;
