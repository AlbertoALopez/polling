import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const styles = {
    button: {
        marginTop: '5px',
    },
};

const NavbarTabs = () => (
    <div>
        <FlatButton style={styles.button} label="Home" icon={<ActionHome />} />
        <FlatButton style={styles.button} label="Login" />
    </div>
);

export default NavbarTabs;
