let nums = [4, 7, 2, 1, 9, 7];

let min = nums.reduce(function(a, b) {
  return Math.min(a, b);
});

console.log('min:', min);
// min: 1

let max = nums.reduce(function(a, b) {
  return Math.max(a, b);
});

console.log('max:', max);
// max: 9