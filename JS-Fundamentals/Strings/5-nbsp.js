(function () {
    'use strict';

    console.log('\n\nProblem 5. nbsp');

    var exampleString, result;

    function removeWhiteSpaces(string) {
        return string.split(' ').join('&nbsp');
    }

    exampleString = 'But you were living in another world tryin\' to get your message through';
    result = removeWhiteSpaces(exampleString);
    console.log(result);
}());