var Person = function(name) {
    this.name = name;
}
Person.prototype.say = function() {
    console.log(`My name is ${this.name}.`);
}

let person = new Person("Grzegorz");
person.say();