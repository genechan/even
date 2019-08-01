import actions from "../actions";

const formReducer = (state = {}, action )=> {
	switch (action.type) {
		case "text":
		return { 
			...state, 
			text: action.text
		};
		case "star":
		return { 
			...state, 
			stars: action.text
		};
		case "license":
		return { 
			...state, 
			license: action.text
		};
		case "forked":
		return { 
			...state, 
			forked: action.forked
		};
		case "updateItems":
		return{
			...state,
			items: [...action.items]
		}
		default:
		return state
	};
  };
export default formReducer;