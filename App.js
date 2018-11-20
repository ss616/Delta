// Library Imports
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// External Library Imports
import ReduxThunk from 'redux-thunk';

// Local Imports
import Main from './src/components/Main';
import reducers from './src/reducers';
import {reduxStore} from './src/store';

export default class App extends Component {

  render() {
    console.disableYellowBox=true;
    return (
      <Provider store = {reduxStore}>
        <Main />
      </Provider>
    );
  }
}