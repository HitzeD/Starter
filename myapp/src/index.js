import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Logger from 'redux-logger'; // REMOVE FOR PRODUCTION -----------------------------------------------------------^^^^^^^^^^^^^^^^^^^^^\\\\\\\\\\\\\\\\\\\\
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import rootReducer from './store/reducers';

import './index.scss';
import App from './App';

require("dotenv").config();

const AppwithRouter = withRouter(App);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk, Logger)));

ReactDOM.render(
    <Provider store={store}>
            <Router>
                <AppwithRouter />
            </Router>
        </Provider>, 
    document.getElementById('root')
);

