import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import About from '../About/About.jsx';
import NavBar from '../Navbar/Navbar.jsx';

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="container">
            <NavBar />
            <About />
        </div>
    </MuiThemeProvider>
);


export default App;
