function validateEmail(str) {
	if (str.length == 0) {
		return false;
	}
  let splitEmail = str.split('@');
  if (splitEmail.length == 2) {
    if (splitEmail[0].length == 0) {
      return false;
    } else {
      let dotsAfterAt = splitEmail[1].split('.').length - 1;
      if (dotsAfterAt == 1) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
}
console.log(validateEmail("@gmail.com"))
console.log(validateEmail("hello.gmail@com"))
console.log(validateEmail("gmail"))
console.log(validateEmail("hello@gmail"))
console.log(validateEmail("hello@edabit.com"))