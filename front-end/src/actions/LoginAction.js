import axios from 'axios';

export default function(formData){
	if(formData === "fake"){
		var axiosPromise = axios({
			method: "POST",
			url: `${window.apiHost}/fakelogin`,
			data: formData
		})		
	}else{
		var axiosPromise = axios({
			method: "POST",
			url: `${window.apiHost}/login`,
			data: formData
		})
	}

	console.log("Login action running")
	return {
		type: "AUTH_ACTION",
		payload: axiosPromise
	}
}

