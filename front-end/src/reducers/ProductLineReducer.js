
export default function(state=[], action){
	if(action.type === "GET_PRODUCTLINES"){
		// console.log(action.payload);
		return action.payload.data
	}else{
		return state;
	}
}