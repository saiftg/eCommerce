import axios from 'axios';

export default function(){
	const ajaxPromise = axios.get(`${window.apiHost}/productlines/get`);
	// console.log(ajaxPromise);
	return{
		type: "GET_PRODUCTLINES",
		payload: ajaxPromise
	}
}