import React from "react";
import { connect } from 'react-redux';
import Actions from "../redux/actions";
import fetch from "isomorphic-fetch";

//sample call
//https://api.github.com/search/repositories?q=math+license:mit+stars:%3E=1+fork:only

const FormClass = (props) => {
	const handleTextChange = (event) => {
		props.updateText(event.target.value);
	}
	const handleStarChange = (event) => {
		props.searchStars(event.target.value);
	}
	const selectLicence = (event) => {
		props.selectLicence(event.target.value);
	}
	const pickForked = (event) => {
		props.pickForked(event.target.checked);
	}
	const handleOnSubmit = (event) => {
		event.preventDefault();
		props.callAPI({
			...props,
			q: props.text
		});
	};
	return (
		<form>
			<fieldset>
				<label htmlFor="text">Text</label>
				<input type="text" name="text" id="text" onChange={handleTextChange}/>
			</fieldset>
			<fieldset>
				<label htmlFor="stars">Stars</label>
				<input type="text" name="starts" id="stars" onChange={handleStarChange}/>
			</fieldset>
			<fieldset>
				<label htmlFor="license">License</label>
				<select name="license" id="license" defaultValue="" onChange={selectLicence}>
					<option value="">Select</option>
					<option value="apache-2.0">Apache License 2.0</option>
					<option value="bsd-3-clause">BSD 3-Clause</option>
					<option value="mit">MIT License</option>
					<option value="mpl-2.0">Mozilla Public License 2.0</option>
					<option value="other">Other</option>
					<option value="null">NO LICENSE</option>
				</select>
			</fieldset>
			<fieldset>
				
				<label htmlFor="forked">
					<input type="checkbox" name="forked" id="forked" onChange={pickForked}/>
					Included Forked
				</label>
			</fieldset>
			<div>
				<button type="button" className="search_btn" onClick={handleOnSubmit}>SEARCH</button>
			</div>
		</form>
	);
}
const createQueryString = (queryObj) => {
	const q = `q=${queryObj.q}`;
	const licence = (queryObj.licence || queryObj.licence === null) ? `+licence:${queryObj.licence}` : ``;
	const stars = queryObj.stars ? `+stars:${queryObj.stars}` :'';
	const fork = queryObj.fork ? `+fork:only` : '+fork:false';

	return q+licence+stars+fork;
}
const mapStateToProps = (state) => {
	return {
		text: state.formReducer.text || '',
		stars: state.formReducer.stars,
		licence: state.formReducer.licence,
		forked: state.formReducer.forked
	};
};
const mapDispatchToProps = (dispatch) =>{
	
	return {
		updateText: (text) => {
			dispatch(Actions.searchText(text));
		},
		searchStars: (text) => {
			dispatch(Actions.searchStars(text));
		},
		selectLicence: (value) => {
			dispatch(Actions.selectLicence(value));
		},
		pickForked: (value) => {
			dispatch(Actions.pickForked(value));
		},
		callAPI: (query={
			q:"",
			license: null,
			stars:0,
			fork: false
		}) => {
			const queryParams = createQueryString(query);
			const url = `https://api.github.com/search/repositories?${queryParams}`;
			fetch( url )
			.then(function(response) {
				if (response.status >= 400) {
					throw new Error("Bad response from server");
				}
				return response.json();
			})
			.then(function(stories) {
				console.log(stories);
			});
		}
	};
}
const Form = connect(
	mapStateToProps,
	mapDispatchToProps
  )(FormClass);

export default Form;
