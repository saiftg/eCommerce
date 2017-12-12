
//an action is a function that returns object with property type atleast
import axios from 'axios';

export default function(name){
	console.log("AUTH_ACTION is runnning");
	console.log(name);
	var axiosPromise = axios({
		url: `${window.apiHost}/register`,
		method: "POST",
		data: name
	})
	return{
		type: "AUTH_ACTION",
		payload: axiosPromise
	}
}