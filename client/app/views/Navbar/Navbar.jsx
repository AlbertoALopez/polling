/* Navbar react component */
import { withRouter } from 'react-router';
import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavbarTabs from './NavbarTabs.jsx';
import LeftDrawer from '../LeftDrawer/LeftDrawer.jsx';
import './_Navbar.scss';


class Navbar extends React.Component {
    handleTouchTap() {
        this.props.router.push('/');
    }
    render() {
        return (
            <AppBar
                onTitleTouchTap={this.handleTouchTap.bind(this)}
                title={<span className="navbar-title">Polling</span>}
                iconElementLeft={<LeftDrawer />}
                iconElementRight={<NavbarTabs loggedIn={this.props.loggedIn}/>}
            />
        );
    }
}

Navbar.propTypes = {
    router: React.PropTypes.object.isRequired,
    loggedIn: React.PropTypes.bool,
};

export default withRouter(Navbar);
