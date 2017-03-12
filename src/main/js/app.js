import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, browserHistory} from 'react-router';
import reducer from './reducers';
import routes from './routes';
import promise from 'redux-promise';

const store = applyMiddleware(
    promise
)(createStore);
const appElement = document.getElementById('app');

ReactDOM.render(
    <Provider store={store(reducer)}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    appElement
);