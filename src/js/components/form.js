import React from "react";
import { connect } from 'react-redux';
import Actions from "../redux/actions";


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
		props.pickForked(event.target.value);
	}
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
				<select name="license" id="license" onChange={selectLicence}>
					<option selected value="">Select</option>
					<option value="MIT">MIT</option>
					<option value="ISC">ISC License</option>
					<option value="GUN">GNU</option>
				</select>
			</fieldset>
			<fieldset>
				
				<label htmlFor="forked">
					<input type="checkbox" name="forked" id="forked" onChange={pickForked}/>
					Included Forked
				</label>
			</fieldset>
			<div>
				<button className="search_btn">SEARCH</button>
			</div>
		</form>
	);
}
const mapStateToProps = (state) => {
	return {
		text: state.formReducer.text || '',
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
	};
}
const Form = connect(
	mapStateToProps,
	mapDispatchToProps
  )(FormClass);

export default Form;
