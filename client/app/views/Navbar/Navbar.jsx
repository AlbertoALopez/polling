/* Navbar react component */
import { withRouter } from 'react-router';
import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavbarTabs from './NavbarTabs/NavbarTabs.jsx';
import LeftDrawer from '../LeftDrawer/LeftDrawer.jsx';
import './_Navbar.scss';


const styles = {
    appbar: {
        position: 'fixed',
        top: '0',
        left: '0',
    },
    spacer: {
        height: '64px',
    },
};

class Navbar extends React.Component {
    handleTouchTap() {
        this.props.router.push('/');
    }
    render() {
        return (
            <div>
                <AppBar
                    style={styles.appbar}
                    onTitleTouchTap={this.handleTouchTap.bind(this)}
                    iconElementLeft={<LeftDrawer loggedIn={this.props.loggedIn} />}
                    iconElementRight={<NavbarTabs loggedIn={this.props.loggedIn} />}
                    zIndex={0}
                />
                <div style={styles.spacer}></div>
            </div>
        );
    }
}

Navbar.propTypes = {
    router: React.PropTypes.object.isRequired,
    loggedIn: React.PropTypes.bool,
};

export default withRouter(Navbar);
