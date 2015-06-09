(function () {
    'use strict';

    function checkIsEven(randomNumber) {
        return randomNumber % 2 !== 0;
    }

    //Get a random integer value, using chance.js library to test the program
    var i, randomNumber, isOdd, result;
    for (i = 0; i < 5; i += 1) {
        randomNumber = chance.integer({min: -9999, max: 9999});
        isOdd = checkIsEven(randomNumber);
        result = {
            randomNumber: randomNumber,
            isOdd: isOdd
        };

        console.log(result);
    }
}());
