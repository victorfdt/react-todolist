import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { createStore,  applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route } from 'react-router-dom'

//Creating a new store / Passing many reducers
//Proving to thunk the capability to catch the actions
const store = createStore(rootReducer, applyMiddleware(thunk));

//Redux is available in all components
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
