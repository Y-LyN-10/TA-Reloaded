(function () {
    'use strict';

    console.log('Problem 2. Reverse number');

    // It's easy to do string reverse, but what about doing that with no string conversions?
    function reverseNumber(n) {
        var reversedDigits = + Number(n.toString().split('').reverse().join('').replace('-', ''));
        return n > 0 ?  reversedDigits : -reversedDigits;
    }

    var randomNumber, digit, reversed, result, i;
    for (i = 0; i < 5; i += 1) {
        randomNumber = chance.floating({min: -100, max: 100, fixed: 2});
        digit = randomNumber;
        reversed = reverseNumber(digit);
        result = {
            decimal: randomNumber,
            reversed: reversed
        };

        console.log(result);
    }
}());