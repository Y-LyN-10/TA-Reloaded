// Create some example data to work with

var Person = Object.create({
    init: function (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        return this;
    },
    toString: function () {
        return this.firstName + ' ' + this.lastName + '(age ' + this.age + ')';
    }
});

/* From the original task:
 * var persons = {
 people.push(new Person("Scott", "Guthrie", 38));
 ...
 I'm not surprised that this input doesn't even work...
 So, I'll write it in my own way. :) */

var people = [
    Object.create(Person).init('Scott', 'Guthrie', 38),
    Object.create(Person).init('Scott', 'Johns', 36),
    Object.create(Person).init('Scott', 'Hanselman', 39),
    Object.create(Person).init('Jesse', 'Liberty', 57),
    Object.create(Person).init('Jon', 'Skeet', 38)
];

(function () {
    console.log('\n\nProblem 6. Group people');

    // I'm using underscore library for this solution
    if (typeof require !== 'undefined') {
        _ = require('../libs/underscore.js');
    }

    var byFirstName, byLastName, byAge, result;

    byFirstName = _.chain(people)
        .groupBy(function (p) { return p.firstName })
        .map(function (p) { return 'Group ' + p[0].firstName + ' : [' + p + ']'})
        .value();

    byLastName = _.chain(people)
        .groupBy(function (p) { return p.lastName })
        .map(function (p) { return 'Group ' + p[0].lastName + ' : [' + p + ']' })
        .value();

    byAge = _.chain(people)
        .groupBy(function (p) { return p.age })
        .map(function (p) { return 'Group ' + p[0].age + ' : [' + p + ']' })
        .value();

    function group(key) {
        if (key === 'firstName') {
            result = byFirstName;
        } else if (key === 'lastName') {
            result = byLastName;
        } else if (key === 'age') {
            result = byAge;
        } else {
            throw new Error('Invalid key');
        }

        console.log(result.toString());
    }

    group('firstName');
    group('lastName');
    group('age');
}());