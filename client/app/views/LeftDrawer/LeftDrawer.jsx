/* Left drawer navigation component */
import React from 'react';
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
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
        return (
            <div><IconButton
                    onTouchTap={this.handleToggle}>
                    <NavigationMenu />
                </IconButton>
                <Drawer
                    open={this.state.open}
                    docked={false}
                    onRequestChange={this.handleToggle.bind(this)}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item</MenuItem>
                </Drawer>
            </div>
        );
    }
}
