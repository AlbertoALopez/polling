/* Navbar react component */
import { withRouter } from 'react-router';
import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavbarTabs from './NavbarTabs.jsx';
import LeftDrawer from '../LeftDrawer/LeftDrawer.jsx';


class Navbar extends React.Component {
    handleTouchTap() {
        this.props.router.push('/');
    }
    render() {
        const styles = {
            title: {
                cursor: 'pointer',
            },
        };
        return (
            <AppBar
                onTitleTouchTap={this.handleTouchTap.bind(this)}
                title={<span style={styles.title}>Polling</span>}
                iconElementLeft={<LeftDrawer />}
                iconElementRight={<NavbarTabs />}
            />
        );
    }
}

Navbar.propTypes = {
    router: React.PropTypes.object.isRequired,
};

export default withRouter(Navbar);
