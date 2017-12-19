//A reducer is a function that returns a piece of state



export default function(state=[], action){
	switch(action.type){
	case 'AUTH_ACTION':
		return action.payload.data;
		break;
	case "LOGOUT":
		return [];
		break;
	default:
		return state;
}
console.log(action);
}



// switch(action.type){
// 	case 'AUTH_ACTION':
// 		return action.payload.data;
// 		break;
// 	case "LOGOUT":
// 		return [];
// 		break;
// 	default:
// 		return state;
// }