// Math.min(n1, n2, n3, ..., nX)
var array = [5, 3, 2, 1, 7];
var minApply = Math.min.apply(undefined, array);
var minCall = Math.min.call(undefined, 5, 3, 2, 1, 7);
console.log(`The min from ${array} is ${minApply} and ${minCall}.`);
