class Person {
    constructor(name) {
        this.name = name;
    }

    say() {
        console.log(`My name is ${this.name}.`);
    }
}

class Student extends Person {
    constructor(name, year) {
        super(name);
        this.year = year;
    }

    say() {
        console.log(`My name is ${this.name} an I'm on ${this.year} year.`);
    }
}

new Person("Tomasz").say();
new Student("Marcin", 2).say();