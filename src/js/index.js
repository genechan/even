//all open source and third party libs
import React from "react";
import ReactDOM from "react-dom";
//for the router
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
//for redux
import combineReducers from "./redux/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(combineReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

 //app code
import {Home} from "./pages";

function App (){
	return(
		<Provider store={store}>
			<Router history={history}>
				<Route exact path="/" component={Home} />
			</Router>
		</Provider>
	);
};
ReactDOM.render(
	<App/>,
	document.getElementById("app")
);