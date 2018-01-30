function A() {
    this.a1 = 1;
    this.a2 = 2;
    this.a3 = 3;
    this.a4 = function() {}
}
A.prototype.a5 = function() {}

var a = new A();
for (const key in a) {
    console.log(key)        
}
console.log("check hasOwnProperty");
for (const key in a) {
    if (a.hasOwnProperty(key)) {
        console.log(key)        
    }
}