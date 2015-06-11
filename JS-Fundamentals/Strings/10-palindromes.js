(function () {
    'use strict';

    console.log('\n\nProblem 10. Find palindromes');

    var exampleString, result;

    function findPalindromes(string) {
        var palindromes = [],
            words = string
                .toLowerCase()
                .replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, '')
                .split(' ');

        // I just love chaining :3
        words.forEach(function (word) {
            if (word === word.split('').reverse().join('')) palindromes.push(word);
        });

        return palindromes;
    }

    exampleString = 'There is a man, his name was Bob.';
    result = findPalindromes(exampleString);

    console.log(result.join(', '));
}());