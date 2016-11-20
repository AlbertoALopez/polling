import React from 'react';
import axios from 'axios';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Grid, Row, Col } from 'react-flexbox-grid';
import NavBar from './Navbar/Navbar.jsx';

injectTapEventPlugin();

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            userName: '',
        };
    }
    componentDidMount() {
        axios.get('/login')
        .then((response) => {
            if (!response) {
                console.log(`Error could not load user data`);
                return;
            }
            else {
                this.setState({
                    loggedIn: !!response.data.loggedIn,
                    userName: response.data.userName,
                });
            }
        });
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div className="app-container">
                    <section className="navbar-container">
                        <NavBar
                            loggedIn={this.state.loggedIn}
                            userName={this.state.userName}
                        />
                    </section>
                    <section className="props-container">
                        {React.cloneElement(this.props.children, {
                            loggedIn: this.state.loggedIn,
                            userName: this.state.userName,
                        })}
                    </section>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
