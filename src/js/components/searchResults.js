import React from "react";
import { connect } from 'react-redux';
import Result from "./result";

const SearchResultsClass = (props) => {
	if (props.items.length === 0){
		return (
			<p>
				Please entry query and click SEARCH button abover, results appear here.
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
		items: state.formReducer.items || []
	};
};
const SearchResults = connect(
	mapStateToProps
  )(SearchResultsClass);
export default SearchResults;