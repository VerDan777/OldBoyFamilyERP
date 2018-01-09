import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import Layout from '../src/Layout/index.jsx';

class App extends Component {
  render() {
    return (
      <Provider store = { store}>
        <div className="App">
            <BrowserRouter>
              <Layout/>
            </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
