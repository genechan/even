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
const selectLicence = (text) => {
	return {
		type: "licence",
		text
	};
};
const pickForked = (checked) => {
	return {
		type: "forked",
		checked
	};
};
export default {
	searchText,
	searchStars,
	selectLicence,
	pickForked
}