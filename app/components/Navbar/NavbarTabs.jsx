import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const NavbarTabs = () => (
    <div>
        <FlatButton label="Home" icon={<ActionHome />} />
        <FlatButton label="Login" />
    </div>
);

export default NavbarTabs;
