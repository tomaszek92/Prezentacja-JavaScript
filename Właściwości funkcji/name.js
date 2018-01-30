function foo1() {}
var foo2 = function () {}
var foo3 = function foo4() {}

console.log(foo1.name);
console.log(foo2.name);
console.log(foo3.name);