var people = []; // make it global to use that data for the other tasks

(function () {
    'use strict';

    var Person = Object.create({
        init: function (firstName, lastName, age, isFemale) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.isFemale = isFemale;
            return this;
        },
        toString: function () {
            return this.firstName + ' ' + this.lastName + ' (age ' + this.age + ')';
        }
    });

    var firstName, lastName, gender, age, i, person, isFemale;
    var peopleTypesByAge = ['child', 'teen', 'adult'];

    // Generate array of 10 people. Use chance.js for random data
    for (i = 0; i <= 10; i += 1) {
        gender = chance.gender();
        isFemale = (gender === 'Female');
        firstName = chance.first({gender: gender});
        lastName = chance.last();
        age = chance.age({type: peopleTypesByAge[chance.natural({min: 0, max: 2})]});

        person = Object.create(Person).init(firstName, lastName, age, isFemale);
        people.push(person);
    }

    console.log('Problem 1. Make person');
    people.forEach(function (person) {
        console.log(person);
    });

}());