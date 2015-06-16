/**
 * Task 2.
 * Write a function that finds all the prime numbers in a range
 * - It should return the prime numbers in an array
 * - It must throw an Error if any of the range params is not convertible to Number
 * - It must throw an Error if any of the range params is missing
 * */

(function () {
    'use strict';

/** --- The solution --- **/

    function findPrimesInRange(params){
        if (!params || params.length < 2) {
            return new Error('Some range params are missing [from, to]');
        }

        if (!params.every(isNumber)) {
            return new Error('Array contains a non-convertible to Number element');
        }

        var from = Number(params[0]);
        var to = Number(params[1]);

        return range(from, to).filter(isPrime);
    }

    function isPrime(number) {
        var start = 2;

        /** Bitwise Hacks:
         *  So, Math.pow(2, 2)  === 2 << 1
         *  Then, sqrt would be === 2 >> 1
         * */

        while (start <= (number >> 2)) {
            if (number % start++ < 1) {
                return false;
            }
        }

        return number > 1 && number !== 4;
    }

    // Generate array of consecutive numbers
    // Actually, my fav is that one: http://stackoverflow.com/a/25166457/4483717
    function range(start, count) {
        return Array
            .apply(0, Array(count))
            .map(function (element, index) {
                return index + start;
            });
    }

/** --- Test the solution --- **/

    var testData = [
          [0, 100]
        , []
        , [1]
        , ['Magic', 3]
    ];

    testData.forEach(function (data) {
        print(findPrimesInRange(data));
    });

/** --- Helper functions --- **/

    function print(result){
        console.log(result);
    }

    function isNumber(item){
        return !(isNaN(item) || Number(item).toString() !== item.toString());
    }

}());
