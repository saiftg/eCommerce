import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
//createStore needs a reducer, specifically root reducer
import RootReducer from './reducers/RootReducer';
import reduxPromise from 'redux-promise';

//We need to rell React abt redux
import { Provider } from 'react-redux';


//create the store
const theStore = applyMiddleware(reduxPromise)(createStore)(RootReducer);


//Hand render the provider and hand provider theStore.
//Put app inside of theProvider, so that everything inside of app, will know abt
//Provider/theStore


ReactDOM.render(
	<Provider store={theStore}>
	<App /> 
	</Provider>,
	document.getElementById('root'
));
