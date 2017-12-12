import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
//createStore needs a reducer, specifically root reducer
import RootReducer from './reducers/RootReducer';
import reduxPromise from 'redux-promise';

// import Student from './Student';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<App />, 
	document.getElementById('root'
));
// registerServiceWorker();
