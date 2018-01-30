var Person = function() {
    this.name = "this";

    var that = {};
    that.name = "that";
    return that;
}

let person = new Person();
console.log(person);

var WrongPerson = function() {
    this.name = "this";
    return "that";
}
let wrongPerson = new WrongPerson();
console.log(wrongPerson);