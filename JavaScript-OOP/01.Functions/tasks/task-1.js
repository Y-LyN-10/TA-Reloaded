/* Task Description */
/* 
 Write a function that sums an array of numbers:
 numbers must be always of type Number
 returns `null` if the array is empty
 throws Error if the parameter is not passed (undefined)
 throws if any of the elements is not convertible to Number

 */

function sum(items) {
    'use strict';

    return items
            .validateNumbers()
            .reduce(function (a, b) {
                return a + b;
            }) || null;
}

/**
 * --- ES6 solution with fat arrow functions ---
 *     You can open it in Firefox or with iojs (using --harmony_arrow_functions flag) **/
//var sum = (n) => n.validateNumbers().reduce((a, b) => a + b) || null; // <3

/** --- Helper functions --- **/

Array.prototype.validateNumbers = function () {
    if (typeof this === 'undefined') {
        throw new Error('Parameter is not passed');
    }

    if (this.length < 1) {
        return [null];
    }

    if (!this.every(isNumber)) {
        throw new Error('Array contains a non-convertible to Number element');
    }

    return this.map(Number);
};

function isNumber(item) {
    return !(isNaN(item) || Number(item).toString() !== item.toString());
}

module.exports = sum;
