import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import { Link } from 'react-router';

const styles = {
    button: {
        marginTop: '5px',
    },
};

const NavbarTabs = () => (
    <div>
        <Link to="/">
            <FlatButton style={styles.button} label="Home" icon={<ActionHome />} />
        </Link>
        <Link to="">
            <FlatButton style={styles.button} label="Login" />
        </Link>
    </div>
);

export default NavbarTabs;
