/* Left drawer navigation component */
import React from 'react';
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

export default class LeftDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    handleToggle = () => {
        this.setState({
            open: !this.state.open,
        });
    }
    render() {
        let item;
        if (this.props.loggedIn) {
            item =
            <Link to="/dashboard">
                <MenuItem onTouchTap={this.handleToggle}>My profile</MenuItem>
            </Link>;
        }
        else {
            item =
                <Link to="/">
                    <MenuItem onTouchTap={this.handleToggle}>Home</MenuItem>
                </Link>;
        }
        return (
            <div>
                <IconButton
                    onTouchTap={this.handleToggle}
                >
                    <NavigationMenu />
                </IconButton>
                <Drawer
                    open={this.state.open}
                    docked={false}
                    onRequestChange={this.handleToggle.bind(this)}
                >
                    { item }
                    <Link to="/polls/createpoll">
                        <MenuItem onTouchTap={this.handleToggle}>Create new</MenuItem>
                    </Link>
                    <Link to="/polls/all">
                        <MenuItem onTouchTap={this.handleToggle}>See all</MenuItem>
                    </Link>
                </Drawer>
            </div>
        );
    }
}
