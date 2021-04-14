function warOfNumbers(arr) {
	let even = 0;
    let odd = 0;
    for (let i of arr) {
        if (i % 2 === 0) {
            even += i;
        } else {
            odd += i;
        }
    }
    return Math.abs(odd - even)
}
console.log(warOfNumbers([12, 90, 75]))
console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]))
