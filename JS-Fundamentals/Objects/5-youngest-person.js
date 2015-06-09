(function () {
    'use strict';

    console.log('\n\nProblem 5. Youngest person');

    function findYoungestPerson(people) {
        var youngestPerson, fullName, strMessage;

        youngestPerson = people.sort(function (firstPerson, secondPerson) {
            return firstPerson.age - secondPerson.age;
        })[0];

        fullName = youngestPerson.firstName + ' ' + youngestPerson.lastName;
        strMessage = 'The youngest person is ' + fullName;

        return strMessage;
    }

    var people = [
        { firstName: 'George', lastName: 'Kolev', age: 32},
        { firstName: 'Bay',    lastName: 'Ivan',  age: 81},
        { firstName: 'Baba',   lastName: 'Ginka', age: 40}
    ];

    console.log('People:', people);
    console.log(findYoungestPerson(people));
}());