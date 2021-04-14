function validatePIN(pin) {
	if (pin == "") {
		return false
	}
	if (pin.match(/\d/g).length == 4) {
		return true
	}
	if (pin.match(/\d/g).length == 6) {
		return true
}
	return false
}

console.log(validatePIN("1234"))
console.log(validatePIN("12345"))
console.log(validatePIN("a234"))
console.log(validatePIN(""))
