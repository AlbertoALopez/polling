/* Login dialog react component */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router';
import './_Login.scss';

class Login extends React.Component {
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
    handleLogin() {
        window.location = '/auth/google';
    }
    render() {
        const actions = [
                <FlatButton
                    label="Cancel"
                    primary={true}
                    onTouchTap={this.handleClose.bind(this)}
                />,
            <FlatButton
                label="Login"
                primary={true}
                onTouchTap={this.handleLogin.bind(this)}
            />,
        ];

        return (
            <div>
                <RaisedButton
                    className="signin-button"
                    label="Login to create polls"
                    onClick={this.handleOpen.bind(this)}
                    labelPosition="before"
                />
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this)}
                >
                    Login with Google.
                </Dialog>
            </div>
        );
    }
}

Login.propTypes = {
    router: React.PropTypes.object.isRequired,
};

export default withRouter(Login);
