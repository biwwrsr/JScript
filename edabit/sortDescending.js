function sortDescending(num) {
	return parseInt(num.toString().split('').sort().reverse().join(''));
}
console.log(sortDescending(12345));