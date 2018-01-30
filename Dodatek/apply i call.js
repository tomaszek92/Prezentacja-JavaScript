var Person = function(name) {
    this.name = name;
}
Person.prototype.say = function() {
    console.log(`My name is ${this.name}.`);
}
Person.prototype.introduce = function(age, hobby) {
    console.log(`My name is ${this.name} and I'm ${age} years old and my hobby is ${hobby}.`);
}

var person = new Person("Tomek");
person.say.apply({ name: "Bartek"});
person.say.call({name: "Krzysztof"});
person.introduce(6, "computer games")
person.introduce.apply({name: "Marcin"}, [31, "basketball"]);
person.introduce.call({name: "Marcin"}, 32, "football");