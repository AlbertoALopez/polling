import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavbarTabs from './NavbarTabs.jsx';

const NavBar = () => (
    <AppBar
        title="Polling"
        iconElementRight={<NavbarTabs />}
    />
);

export default NavBar;
