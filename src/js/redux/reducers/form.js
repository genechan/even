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
			star: action.text
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