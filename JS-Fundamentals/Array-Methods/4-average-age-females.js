(function () {
    'use strict';

    // Some functional programming <3

    function average(array) {
        function plus(a, b) { return a + b; }
        return array.reduce(plus) / array.length;
    }
    function age(p) { return p.age; }
    function female(p) { return p.isFemale }

    console.log('\n\nProblem 4. Average age of females');
    console.log('Average age of females is:');
    console.log(Math.round(average(people.filter(female).map(age))));
}());