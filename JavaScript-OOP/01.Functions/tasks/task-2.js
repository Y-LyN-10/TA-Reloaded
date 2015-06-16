/* Task description */
/*
 Write a function a function that finds all the prime numbers in a range
 1) it should return the prime numbers in an array
 2) it must throw an Error if any on the range params is not convertible to `string`
 3) it must throw an Error if any of the range params is missing
 */

function findPrimesInRange(from, to) {
    'use strict';

    return ([from, to].validate().range().filter(isPrime));
}

// Generate array of consecutive numbers
Array.prototype.range = function () {
    var start = Number(this[0]);
    var count = Number(this[1]) - start + 1;

    return Array
        .apply(0, Array(count))
        .map(function (element, index) {
            return index + start;
        });
};

Array.prototype.validate = function () {
    if (this.length < 2 || typeof this === 'undefined') {
        throw new Error('Some range params are missing (from, to)');
    }

    if (!this.every(isNumber)) {
        throw new Error('Array contains a non-convertible to Number element');
    }

    return this;
};

function isPrime(number) {
    var start = 2;

    /** Bitwise Hacks:
     *  So, Math.pow(2, 2) is === 2 << 1
     *  Then, sqrt should be  === 2 >> 1
     * */

    while (start <= (number >> 2)) {
        if (number % start++ < 1) {
            return false;
        }
    }

    return (number > 1 && number !== 4 && number);
}

function isNumber(item) {
    return !(isNaN(item) || Number(item).toString() !== item.toString());
}

module.exports = findPrimesInRange;