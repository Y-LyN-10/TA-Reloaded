(function () {
    'use strict';

    function isThirdBitOne(number){
        var mask, numberAndMask, bit;

        mask = 1 << 3;
        numberAndMask = number & mask;
        bit = numberAndMask >> 3;

        return bit ? 1 : 0;
    }

    //Array with test examples from the task
    var testNumbers = [5, 8, 0, 15, 5343, 62241],
        checked, result, rn, i, j;

    //And some randoms to the array...
    for (i = 0; i < 5; i += 1) {
        rn = chance.integer({min: 0, max: 1000});
        testNumbers.push(rn);
    }

    //And test
    for (j = 0; j < testNumbers.length; j += 1) {
        checked = isThirdBitOne(testNumbers[j]);
        result = {
            number: testNumbers[j],
            thirdBit: checked
        };

        console.log(result);
    }
}());