(function () {
    'use strict';

    function checkAdultAge(people) {
        /**
         * With ES6, we could use fat arrow functions.
         * It works now in firefox. Uncomment to try it if you want to.
         */
        // return people.every(p => p.age > 18);

        return people.every(function (p) {
            return p.age >= 18;
        });
    }

    console.log('\n\nProblem 2. People of age');
    console.log('All people above are over 18 years old?', checkAdultAge(people));

}());