import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './reducers/usersReducers';
import productsReducer from './reducers/productsReducer';


const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
})

const store = createStore(
    allReducers,
    {
        products: [{ name: 'iphone' }],
        user: 'Rich'
    },
    window.devToolsExtentions && window.devToolsExtentions()
);

console.log(store.getState())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
