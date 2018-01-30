var Person = (function() {
    var id = 0;

    function PersonInternal() {
        this.id = ++id;
    }

    PersonInternal.prototype.getId = function() {
        return this.id;
    }

    PersonInternal.getMaxId = function() {
        return id;
    }

    return PersonInternal;
})();

var person1 = new Person();
var person2 = new Person();
console.log(Person.getMaxId())
console.log(person1.getId());
console.log(person2.getId());