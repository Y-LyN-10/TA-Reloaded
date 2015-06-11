(function () {
    'use strict';

    console.log('Problem 1. Reverse string');

    var exampleStrings, reversed, result;

    function reverseString(string) {
        var words, reversedWord,
            output = [], i;

        words = string.split(' ')
            .filter(Boolean)
            .forEach(function (word) {
                reversedWord = [];
                for (i = 0; i < word.length; i += 1) {
                    reversedWord[i] = word[word.length - 1 - i];
                }
                output.push(reversedWord.join(''));
            });

        return output.reverse().join(' ');
    }

    exampleStrings = ['sample', 'telerik', 'java script'];

    exampleStrings.forEach(function (string) {
        reversed = reverseString(string);
        result = {
            string: string,
            reversed: reversed
        };
        console.log(result);
    });
}());