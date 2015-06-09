(function () {
    'use strict';

    function checkUnderage(people) {
        return people.filter(function (p) {
            return p.age < 18;
        });
    }

    console.log('\n\nProblem 3. Underage people');
    console.log('All people under 18 years old:');

    var underAged = checkUnderage(people);
    underAged.forEach(function (person) {
       console.log(person);
    });

}());