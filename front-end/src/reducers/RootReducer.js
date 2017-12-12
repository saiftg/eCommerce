//This is the root reducer. Each reducer contains a piece of state
//The root contains all the reducers, ie all pieces of state
//or the entire applicaiton state
//In order to get all little reducers into root we need combineReducers

import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';


//combineReducers takes an object as an argument with key value pairs
// as statename : reducerfunction, which returns a value

const rootReducer = combineReducers({
	auth: AuthReducer
}) 


export default rootReducer;