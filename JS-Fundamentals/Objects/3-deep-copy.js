(function () {
    'use strict';

    console.log('\n\nProblem 3. Deep copy');

    function deepCopy(object) {
        // [Dirty hack] Exploit the JSON library for a rather fast way of deep-cloning objects
       return (JSON.parse(JSON.stringify(object)));
    }

    var object = {
        course: 'JavaScript',
        exam: 'soon'
    };

    var copy = deepCopy(object);
    copy.exam = 'Very soon!';

    console.log('Original object:\n', object);
    console.log('Deep copy of it with changed property:\n', copy);
}());