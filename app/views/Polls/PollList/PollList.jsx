/* React component that displays a list of polls */
import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { grey400, darkBlack } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Reply</MenuItem>
        <MenuItem>Forward</MenuItem>
        <MenuItem>Delete</MenuItem>
    </IconMenu>
);

const ListExampleMessages = () => (
    <div>
        <List>
            <Subheader>Today</Subheader>
            <ListItem
                rightIconButton={rightIconMenu}
                primaryText="Poll title"
                secondaryText={
                    <p>
                        <span style={{ color: darkBlack }}>Poll question here</span>
                    </p>
                }
                secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
                rightIconButton={rightIconMenu}
                primaryText="Poll placeholder"
                secondaryText={
                    <p>
                        <span style={{ color: darkBlack }}>Poll question here</span>
                    </p>
                }
                secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
                rightIconButton={rightIconMenu}
                primaryText="Poll placeholder"
                secondaryText={
                    <p>
                        <span style={{ color: darkBlack }}>Poll question here</span>
                    </p>
                }
                secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
                rightIconButton={rightIconMenu}
                primaryText="Poll placeholder"
                secondaryText={
                    <p>
                        <span style={{ color: darkBlack }}>Poll question here</span>
                    </p>
                }
                secondaryTextLines={2}
            />
        </List>
    </div>
);

export default ListExampleMessages;