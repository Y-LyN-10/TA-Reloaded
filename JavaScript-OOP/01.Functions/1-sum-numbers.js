/**
 * Task 1.
 *
 * Write a function that sums an array of numbers:
 * - Numbers must be always of type Number
 * - Returns null if the array is empty
 * - Throws Error if the parameter is not passed (undefined)
 * - Throws if any of the elements is not convertible to Number
 * */

(function () {
    'use strict';

/**
 * --- ES6 basic solution ---
 *     You can open it in Firefox or with iojs (using --harmony_arrow_functions flag) **/
    // var sum = (n) => n.map(Number).reduce((a, b) => a + b); // <3

/** --- ES5.1 solution --- **/

    function sum(items){
        if (!items) {
            return new Error('Parameter is not passed');
        }

        if (items.length < 1) {
            return null;
        }

        if (!items.every(isNumber)) {
            return new Error('Array contains a non-convertible to Number element');
        }

        return items
            .map(Number)
            .reduce(function (a, b) {
                return a + b;
            });
    }

/** --- Test the solution --- **/

    // Usually, I don't use comma-first style, but it's useful here, because of the comments
    var testData = [
          [1, 2.9, 30, '0', 0, '-1.5', -5.0000000]   // valid numbers                       - [27.4]
        , [Infinity, -Infinity]                      // lol                                 - [NaN]
        , []                                         // empty array                         - [null]
        , undefined                                  // parameter is not passed (undefined) - [Error]
        , [NaN, 'Magic number']                      // not convertible elements to Number  - [Error]
    ];
    
    testData.forEach(function (data) {
        print(sum(data));
    });

/** --- Helper functions --- **/

    function print(result){
        console.log(result);
    }

    function isNumber(item){
        return !(isNaN(item) || Number(item).toString() !== item.toString());
    }

}());