/* Login dialog react component */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
        };
    }
    handleClose() {
        this.setState({
            open: false,
        });
    }
    handleOpen() {
        this.setState({
            open: true,
        });
    }
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
        ];
        const styles = {
            button: {
                margin: '10px',
            },
        };

        return (
            <div>
                <RaisedButton
                    style={styles.button}
                    label="Sign in"
                    onClick={this.handleOpen.bind(this)}
                    labelPosition="before" />
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this)}
                >
                    Login to create polls.
                </Dialog>
            </div>
        );
    }
}
