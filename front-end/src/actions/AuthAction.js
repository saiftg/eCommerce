
//an action is a function that returns object with property type atleast
import axios from 'axios';

export default function(formData){
	console.log("AUTH_ACTION is runnning");
	console.log(formData);
	var axiosPromise = axios({
		url: `${window.apiHost}/register`,
		method: "POST",
		data: formData
	})
	console.log(axiosPromise);
	return{
		type: "AUTH_ACTION",
		payload: axiosPromise
	}
}