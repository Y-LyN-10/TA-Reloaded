(function () {
    'use strict';

    function divisibleByFiveAndSeven(number) {
        return number % 35 === 0; // by 5 and 7
    }

    //Array with test examples from the task
    var testNumbers = [3, 0, 5, 7, 35, 140],
        checked, result, rn, i, j;

    //And some randoms to the array...
    for (i = 0; i < 5; i += 1) {
        rn = chance.integer({min: -500, max: 1000});
        testNumbers.push(rn);
    }

    //And test
    for (j = 0; j < testNumbers.length; j += 1) {
        checked = divisibleByFiveAndSeven(testNumbers[j]);
        result = {
            number: testNumbers[j],
            divisibleByThree: checked
        };
        console.log(result);
    }
}());