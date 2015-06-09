(function () {
    'use strict';

    var groups = {};

    people.forEach(function (person) {
        var firstChar = person.firstName[0].toLowerCase();
        groups[firstChar] = groups[firstChar] || [];
        groups[firstChar].push(person);
    });

    console.log('\n\nProblem 6. Group people');
    console.log(groups);
}());