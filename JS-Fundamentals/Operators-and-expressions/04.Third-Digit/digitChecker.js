(function () {
    'use strict';

    function checkThirdDigitIsSeven(number){
        var numberAsString = number.toString();
        return numberAsString[numberAsString.length - 3] === '7';
    }

    var testNumbers = [5, 701, 1732, 9703, 877, 777877, 9999799];
    var isSeven, result, i;

    for(i = 0; i < testNumbers.length; i+=1){
        isSeven = checkThirdDigitIsSeven(testNumbers[i]);
        result = {
            digit: testNumbers[i],
            isThirdDigitSeven: isSeven
        };

        console.log(result);
    }
}());