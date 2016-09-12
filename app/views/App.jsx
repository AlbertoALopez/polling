import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavBar from './Navbar/Navbar.jsx';

injectTapEventPlugin();

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div className="app-container">
                    <section className="navbar-container">
                        <NavBar />
                    </section>
                    <section className="props-container">
                        {this.props.children}
                    </section>
                </div>
            </MuiThemeProvider>
        )
    }
}



export default App;
