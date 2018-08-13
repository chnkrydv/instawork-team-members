import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import './app.css';

import rootReducer from './store/reducers/';
import Root from './view/Root';

const store = createStore(rootReducer, applyMiddleware(logger));

const App = () => {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
}

export default App;
