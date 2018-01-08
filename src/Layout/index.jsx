import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { muiTheme } from '../ThemeStyle';
import { Route, BrowserRouter } from 'react-router';
import HomePage from '../containers/HomePage/index.jsx';
import ActivePage from '../containers/ActivePage/index.jsx';
import ContactsPage from '../containers/ContactsPage/index.jsx';


const Layout = (props) => {
    return(
        <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
                <Route path="/" component={ HomePage }></Route>
                <Route path="/active" component={ ActivePage }></Route>
                <Route path="/contacts" component={ ContactsPage }></Route>
        </MuiThemeProvider>
    )
}
export default Layout;