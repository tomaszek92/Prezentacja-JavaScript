var Person = function(name) {
    // utwórz nowy obiekt
    this.name = name;
    this.say = function() {
        console.log(`My name is ${this.name}.`);
    }
    // return this;
}

let person = new Person("Grzegorz");
person.say();