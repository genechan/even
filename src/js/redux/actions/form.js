const searchText = (text) => {
	return {
		type: "text",
		text
	};
};
const searchStars = (text) => {
	return {
		type: "star",
		text
	};
};
const selectLicense = (text) => {
	return {
		type: "license",
		text
	};
};
const pickForked = (checked) => {
	return {
		type: "forked",
		forked: checked
	};
};
const updateItems = (items = []) => {
	return {
		type: "updateItems",
		items,
		hasSearch:true,
	}
}
export default {
	searchText,
	searchStars,
	selectLicense,
	pickForked,
	updateItems
}