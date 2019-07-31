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
		case "licence":
		return { 
			...state, 
			licence: action.text
		};
		case "forked":
		return { 
			...state, 
			forked: action.checked
		};
		default:
		return state
	};
  };
export default formReducer;