(function () {
    'use strict';

    console.log('\n\nProblem 2. Correct brackets');

    var exampleStringsWithBrackets, checked, result;

    function checkTheBrackets(str) {
        var brackets = 0;

        for (var ch in str) {
            if (str[ch] === '(') brackets++;
            else if (str[ch] === ')') brackets--;
        }

        return brackets === 0 ? 'correct' : 'incorrect';
    }

    exampleStringsWithBrackets = [
        '( ( a + b ) / 5 – d )', // correct
        ') ( a + b ) )',         // incorrect
        '( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'   //incorrect
    ];

    exampleStringsWithBrackets.forEach(function (expression) {
        checked = checkTheBrackets(expression);
        result = {
            expression: expression,
            result: checked
        };

        console.log(result);
    });
}());