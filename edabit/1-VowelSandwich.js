function isVowelSandwich(str) {
    if (str.length != 3) return false
	let vowels = 'aeiou'
	return !vowels.includes(str[0]) && vowels.includes(str[1]) && !vowels.includes(str[2])
}
console.log(isVowelSandwich("cat"))
console.log(isVowelSandwich("ear"))
console.log(isVowelSandwich("bake"))
console.log(isVowelSandwich("try"))
