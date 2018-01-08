import React, { Component } from 'react';
import { muiTheme } from '../src/ThemeStyle';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import Layout  from '../src/Layout/index.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
  render() {
    return (
      <Provider store = { store}>
        <div className="App">
          <MuiThemeProvider>
            <BrowserRouter>
              <Layout/>
            </BrowserRouter>
          </MuiThemeProvider>
        </div>
      </Provider>
    );
  }
}

export default App;
