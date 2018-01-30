var Person = function(firstName, lastName) {
    var _firstName = firstName;
    var _lastName = lastName;

    this.getFirstName = function() {
        return _firstName;
    }

    this.getLastName = function() {
        return _lastName;
    }
}

Person.prototype.say = function() {
    console.log(`I'm ${this.getFirstName()} ${this.getLastName()}`);
}

let person = new Person("Jan", "Kowalski");
person.say();