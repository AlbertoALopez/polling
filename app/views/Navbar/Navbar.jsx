import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavbarTabs from './NavbarTabs.jsx';
import LeftDrawer from '../LeftDrawer/LeftDrawer.jsx';

const NavBar = () => (
    <AppBar
        title="Polling"
        iconElementLeft={<LeftDrawer />}
        iconElementRight={<NavbarTabs />}
    />
);

export default NavBar;
