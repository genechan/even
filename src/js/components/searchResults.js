import React from "react";
import { connect } from 'react-redux';
import Result from "./result";

const SearchResultsClass = (props) => {
	if (!props.hasSearch){
		return (
			<p>
				Please entry query and click SEARCH button abover, results appear here.
			</p>
		);
	}else if(props.items.length === 0){
		return (
			<p>
				Sorry there are no reuslts, please try something else
			</p>
		);
	}
	return (
		<React.Fragment>
			<p className="title">
				SEARCH results:
			</p>
			{props.items.map((item) => <Result {...item}/>)}
		</React.Fragment>);
};

const mapStateToProps = (state) => {
	return {
		items: state.formReducer.items || [],
		hasSearch: state.formReducer.hasSearch
	};
};
const SearchResults = connect(
	mapStateToProps
  )(SearchResultsClass);
export default SearchResults;