function simpleNumbers(a, b) {
	let res = [];
  for (let i = a; i <= b; i++)
    if (i === [...`${i}`].reduce((a, c, j) => a + c ** (j + 1), 0))
      res.push(i);
  return res;
}
console.log(simpleNumbers(1, 10))
console.log(simpleNumbers(1, 100))
console.log(simpleNumbers(90, 100))
