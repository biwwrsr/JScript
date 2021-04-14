function stepsToConvert(str) {
	const lower = str.replace(/[^a-z]/g, "").length;
	const upper = str.replace(/[^A-Z]/g, "").length;
	return Math.min(lower, upper);
}
console.log(stepsToConvert("abC"))
console.log(stepsToConvert("abCBA"))
console.log(stepsToConvert("aba"))
console.log(stepsToConvert("abaCCC"))