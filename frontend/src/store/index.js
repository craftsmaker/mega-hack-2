import {createStore} from "redux";


function reducer(state = {passed: false}, action){
	console.log("ACTION:",action.type);
	switch(action.type){
		case "ANIMATION":
			return {...state, action: action.action, passed: action?.passed || false}
		case "RESET":
			return {}
		default:
			return state;
	}
}

const store = createStore(reducer);

export default store;