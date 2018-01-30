var Person = function(name) {
    this.name = name;
}
Person.prototype.say = function() {
    console.log(`My name is ${this.name}.`);
}

var Student = function(name, year) {
    Person.call(this, name);
    this.year = year;
}
Student.prototype = new Person();

var person = new Person("Jan");
person.say();

var student = new Student("Grzegorz", 3);
student.say();

Student.prototype.say = function() {
    console.log(`My name is ${this.name} and I'm on the ${this.year}.`);
}
student.say();
console.log(`person instanceof Person: ${person instanceof Person}`);
console.log(`person instanceof Student: ${person instanceof Student}`);
console.log(`student instanceof Person: ${student instanceof Person}`);
console.log(`student instanceof Student: ${student instanceof Student}`);
