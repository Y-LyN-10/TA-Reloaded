(function () {
    'use strict';

    function youngest(p) { return p[0].toString(); }
    function male(p) { return !p.isFemale }

    console.log('\n\nProblem 5. Youngest person');
    console.log('The youngest male is ' +
        youngest(people.filter(male).sort(function (a, b){ return a.age - b.age; })));
}());