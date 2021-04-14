function transformUpvotes(str) {
	let arr= str.split(" ")
	let a= arr.map(x=>Number(x.replace(".","").replace("k","00")))
	return a
}
console.log(transformUpvotes("6.8k 13.5k"))
console.log(transformUpvotes("5.5k 8.9k 32"))
console.log(transformUpvotes("20.3k 3.8k 7.7k 992"))