var Person = function(name) {
    this.name = name;
}
Person.prototype.say = function() {
    console.log(`My name is ${this.name}.`);
}

var person = new Person("Mateusz");
person.say();
var say = person.say.bind({name: "Franciszek"});
say();