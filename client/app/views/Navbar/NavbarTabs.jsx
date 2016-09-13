import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import { Link } from 'react-router';


const NavbarTabs = () => (
    <div>
        <Link to="/">
            <FlatButton className="navbar-btn" label="Home" icon={<ActionHome />} />
        </Link>
        <Link to="">
            <FlatButton className="navbar-btn" label="Login" />
        </Link>
    </div>
);

export default NavbarTabs;
