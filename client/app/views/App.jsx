import React from 'react';
import axios from 'axios';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { grey300 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router';
import octicons from 'octicons';
import NavBar from './Navbar/Navbar.jsx';

injectTapEventPlugin();

const styles = {
    footer: {
        background: grey300,
        height: '56px',
        textAlign: 'center',
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        padding: '10px',
    },
};

function createMarkup() {
    const icon = octicons['mark-github'].toSVG();
    return {
        __html: icon,
    };
}

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

            this.setState({
                loggedIn: !!response.data.loggedIn,
                userName: response.data.userName,
                id: response.data.id,
            });
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
                            id: this.state.id,
                        })}
                    </section>
                    <section style={styles.footer}>
                        <p>See code on GitHub</p>
                        <IconButton
                            href="https://github.com/AlbertoALopez/polling"
                        >
                            <div dangerouslySetInnerHTML={createMarkup()}></div>
                        </IconButton>
                    </section>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
